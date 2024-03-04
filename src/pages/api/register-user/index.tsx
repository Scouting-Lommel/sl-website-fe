import { Request, Response } from 'express';
import { generateApiQuery } from '@/lib/api';
import registeruser from './query.gql';

export default async function handler(req: Request, res: Response): Promise<unknown> {
  // check if every field is filled in correctly
  const body = req.body;
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

  // send the data to the server
  try {
    await generateApiQuery({ query: registeruser, variables: body });
  } catch (e) {
    res
      .status(400)
      .json({ data: 'An error occured whilst trying to push member to database: ' + e });
  }

  // send email
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msgBody = `Naam: ${body.firstName} ${body.lastName}\nGeslacht: ${
    body.sex
  }\nGeboortedatum: ${body.birthDate}\nEmail: ${body.email}\nTelefoonnummer: ${
    body.phoneNumber
  }\nAkabelid: ${body.akabe}\nAdres: ${body.street} ${body.houseNumber} ${
    body.busNumber ? 'bus ' + body.busNumber : ''
  }, ${body.arealCode} ${body.city}`;
  const msg = {
    to: 'inschrijvingen@scoutinglommel.be',
    from: 'noreply@scoutinglommel.be',
    replyTo: body.email,
    subject: 'Nieuwe inschrijving via de website',
    text: msgBody,
  };
  sgMail.send(msg).then(
    () => {},
    (error: any) => {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
      res.status(400).json({ data: 'Error when sending email' + error });
      return;
    },
  );

  // return status code
  res.status(200).json({ data: 'the data was sent to the server correctly' });
  return;
}
