import { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

export default async function handler(req: Request, res: Response): Promise<void> {
  // Turnstile request
  const formData = new FormData();

  formData.append('secret', process.env.TURNSTILE_SECRET_KEY!);
  formData.append('response', req.body.captchaToken!);

  const captchaRequest = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    body: formData,
    method: 'POST',
  });

  const captchaResult = await captchaRequest.json();
  if (!captchaResult.success) {
    res.status(422).json(captchaResult);
    return;
  }

  // Sendgrid Mail request
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
