import { Request, Response } from 'express';

export default async function handler(req: Request, res: Response): Promise<unknown> {
  // check if every field is filled in correctly
  const body = req.body;
  if (!body.emailAddress || !body.subject || !body.body) {
    res
      .status(400)
      .json({ data: 'One of the required email elements was not filled in correctly' });
    return;
  }
  // TODO: send email to the specified email address
  res.status(200).json({ data: 'Email sent correctly' });
  return;
}
