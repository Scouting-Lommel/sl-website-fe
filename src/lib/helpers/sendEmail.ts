import {
  emailRegExValidation,
  phoneRegExValidation,
  urlRegExValidation,
} from '@/lib/constants/regexValidation';
import { noreplyEmailAddress } from '@/lib/constants/emailAddress';

export type Email = {
  from: string;
  to: string;
  cc?: string;
  bcc?: string;
  replyTo?: string;
  subject?: string;
  text?: string;
  html?: string;
};

type GenerateEmailProps = {
  formData: any;
  formTitle: string;
  to: string;
  replyTo?: string;
  cc?: string;
  bcc?: string;
};

type SendEmailProps = {
  email: Email;
  callback: any;
  captchaToken: string;
};

const generateEmail = ({ formData, formTitle, to, replyTo, cc, bcc }: GenerateEmailProps) => {
  const emailBody = `<!DOCTYPE html>
      <html>
        <head>
          <style>
            .title {
              font-weight: bold;
              margin-bottom: 0.375rem;
            }
            .timestamp {
              color: grey;
              margin-top: 0.375rem;
              margin-bottom: 1.25rem;
              text-transform: capitalize;
            }

            .table {
              min-width: 100%;
              border-collapse: collapse;
            }

            .table__row__head {
              text-align: left;
              vertical-align: top;
              width: 1%;
            }

            .table__row__data {
              text-align: left;
              width: auto;
            }

            .table__row__cell {
              padding: 0.5rem 1.25rem;
              border: 1px solid darkgrey;
            }
          </style>
        </head>

        <body>
          <h1 class="title">${formTitle}</h1>
          <p class="timestamp">
            ${new Date().toLocaleDateString('nl-BE', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}, ${new Date().toLocaleTimeString('nl-BE', { hour: '2-digit', minute: '2-digit' })}
          </p>
          <table class="table">
          ${formData
            .map((dataPoint: any) => {
              let tableData = dataPoint.data;

              if (phoneRegExValidation.test(dataPoint.data)) {
                tableData = `<a href="tel:${dataPoint.data}">${dataPoint.data}</a>`;
              }
              if (emailRegExValidation.test(dataPoint.data)) {
                tableData = `<a href="mailto:${dataPoint.data}">${dataPoint.data}</a>`;
              }
              if (urlRegExValidation.test(dataPoint.data)) {
                tableData = `<a href="${dataPoint.data}">${dataPoint.data}</a>`;
              }

              return `
              <tr class="table__row">
                <th class="table__row__head table__row__cell"><pre>${dataPoint.label}</pre></th>
                <td class="table__row__data table__row__cell"><pre>${tableData}</pre></td>
              </tr>`;
            })
            .join('')}
          </table>
        </body>
      </html>`;

  const email: Email = {
    from: noreplyEmailAddress,
    to: process.env.NEXT_PUBLIC_EMAIL_DEV_OVERRIDE || to,
    subject: formTitle,
    html: emailBody,
  };

  if (replyTo) email.replyTo = replyTo;
  if (cc) email.cc = cc;
  if (bcc) email.bcc = bcc;

  return email;
};

const sendEmail = async ({ email, callback, captchaToken }: SendEmailProps) => {
  const emailRequestData = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, captchaToken }),
  };

  const emailRequest = await fetch('/api/send-email', emailRequestData);
  const emailResponse = { message: await emailRequest.json(), status: emailRequest.status };

  callback(emailResponse);
};

export { sendEmail, generateEmail };
