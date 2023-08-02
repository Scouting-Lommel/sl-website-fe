import { Request, Response } from 'express';
import { generateApiQuery } from '@/lib/api';
import registeruser from './query.gql';
import { DocumentNode } from 'graphql';

export default async function handler(req: Request, res: Response): Promise<unknown> {
  // check if every field is filled in correctly
  const body = req.body;
  body.uidList.forEach((uid: string) => {
    console.warn(uid + ': ' + body[uid]);
  });
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

  // send the data to the server
  try {
    await generateApiQuery({ query: registeruser, variables: body });
  } catch (e) {
    res
      .status(400)
      .json({ data: 'An error occured whilst trying to push memeber to database: ' + e });
  }

  // send an email to the new member

  // return status code
  res.status(200).json({ data: 'the data was sent to the server correctly' });
  return;
}
