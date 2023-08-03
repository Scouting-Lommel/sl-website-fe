import { Request, Response } from 'express';
import { generateApiQuery } from '@/lib/api';
import registeruser from './query.gql';

export default async function handler(req: Request, res: Response): Promise<unknown> {
  // check if every field is filled in correctly
  const body = req.body;
  if (!body.uidList) {
    res.status(400).json({ data: 'The uidList was not detected or not send correctly' });
    return;
  }
  if (
    !body.firstName ||
    !body.lastName ||
    !body.sex ||
    !body.birthDate ||
    !body.street ||
    !body.houseNumber ||
    !body.arealCode ||
    !body.city ||
    !body.phoneNumber ||
    !body.email
  ) {
    res.status(400).json({ data: 'One of the required form elements was not filled in correctly' });
    return;
  }
  if (!body.formattedMessage) {
    res
      .status(400)
      .json({ data: 'Formatted message was not given correctly, so no email could be sent' });
    return;
  }

  // send the data to the server
  try {
    await generateApiQuery({ query: registeruser, variables: body });
  } catch (e) {
    res
      .status(400)
      .json({ data: 'An error occured whilst trying to push memeber to database: ' + e });
  }

  // send an email to the user containing the formatted message
  let data: Record<string, string> = {
    emailAddress: body.email,
    subject: 'Inschrijving ' + body.firstName + ' ' + body.lastName,
    body: body.formattedMessage,
  };
  const JSONdata = JSON.stringify(data);
  const endpoint = '/api/send_mail';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSONdata,
  };
  const response = await fetch(endpoint, options);
  if (response.status != 200) {
    res
      .status(400)
      .json({
        data:
          'An error occured whilst trying to send email, however, ' +
          body.firstName +
          ' ' +
          body.lastName +
          ' was registered succesfully',
      });
    return;
  }

  // return status code
  res.status(200).json({ data: 'the data was sent to the server correctly' });
  return;
}
