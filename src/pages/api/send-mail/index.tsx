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
  // send email to the specified email address
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: body.emailAddress,
    from: 'no-reply@scoutinglommel.be', // Use the email address or domain you verified above
    subject: body.subject,
    text: body.body,
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
  res.status(200).json({ data: 'Email sent correctly' });
  return;
}
