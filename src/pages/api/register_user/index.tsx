import { Request, Response } from 'express';

export default function handler(req: Request, res: Response): void {
  // check if every field is filled in correctly
  const body = req.body;
  body.uidList.forEach((uid: string) => {
    console.warn(uid + ': ' + body[uid]);
  });
  if (!body.uidList) {
    res.status(400).json({ data: 'The uidList was not detected or not send correctly' });
  }

  // send the data to the server

  // return status code
  res.status(210).json({ data: 'the data was sent to the server correctly' });
  return;
}
