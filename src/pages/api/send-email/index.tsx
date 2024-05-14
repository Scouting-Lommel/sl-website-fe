import { Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

export default async function handler(req: Request, res: Response): Promise<void> {
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  sgMail.send(req.body.email).then(
    () => {
      res.status(200).json('Email sent successfully');
    },
    (error: any) => {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }

      res.status(400).json(`Error when sending email: ${error}`);
    },
  );
}
