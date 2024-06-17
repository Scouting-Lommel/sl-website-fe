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
            .table__row__head {
              text-align: left;
              padding-right: 1.25rem;
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
            })}
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
                <th class="table__row__head">${dataPoint.label}</th>
                <td class="table__row__data">${tableData}</td>
              </tr>`;
            })
            .join('')}
          </table>
        </body>
      </html>`;

  const email: Email = {
    from: noreplyEmailAddress,
    to: to,
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
