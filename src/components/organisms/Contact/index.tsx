'use client';

import Typography from '@/components/atoms/Typography';
import Button from '@/components/atoms/Button';
import { Contact as ContactProps } from './types';
import styles from './Contact.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = ContactProps & React.HTMLAttributes<HTMLElement>;

const Contact = ({ title, subjectOptions }: Props) => {
  const handleContact = async (event: any) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    if (!event.target.name.value) {
      alert('Gelieve uw naam in te geven');
      return;
    }
    if (!event.target.email.value) {
      alert('Gelieve uw email in te geven');
      return;
    }
    if (!event.target.selection.value) {
      alert('Gelieve een geldig onderwerp te selecteren');
      return;
    }
    if (!event.target.emailBody.value) {
      alert('Gelieve uw bericht in te geven');
      return;
    }
    let data: Record<string, string> = {
      subject: `Email van ${event.target.name.value}, antwoorden via ${event.target.email.value}`,
      emailAddress: event.target.selection.value,
      body: event.target.emailBody.value,
    };

    const JSONdata = JSON.stringify(data);

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };

    const response = await fetch('/api/send_mail', options);
    const result = await response.json();
    if (response.status != 200) {
      alert(
        'something went wrong trying to resolve the request:\n Status code:' +
          response.status +
          '\n Error message: ' +
          result.data,
      );
      return;
    }

    alert('success!');
  };

  return (
    <div className="contactContainer">
      <h1 className="t-headline-1-alt contactTitle">{title}</h1>
      <form onSubmit={(event) => handleContact(event)} noValidate={false}>
        <div className="contactUserInfo">
          <div className="contactUserInfoItem">
            <Typography>
              <label htmlFor="name">Naam</label>
            </Typography>
            <input className="contactInput" type="text" id="name" name="name" />
          </div>
          <div className="contactUserInfoItem">
            <Typography>
              <label htmlFor="email">Emailadres</label>
            </Typography>
            <input className="contactInput" type="text" id="email" name="email" />
          </div>
        </div>
        <div className="contactUserInfo">
          <div className="contactUserInfoItem">
            <Typography>
              <label htmlFor="selection">Onderwerp</label>
            </Typography>
            <select id="selection" name="selection">
              {subjectOptions.map((subject, i) => {
                return (
                  <option key={i} value={subject.emailAddress}>
                    {subject.label}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="contactBody">
          <div className="contactBodyItems">
            <Typography>
              <label htmlFor="emailBody">Bericht</label>
            </Typography>
            <textarea
              className="contactInput contactInput--large"
              id="emailBody"
              name="emailBody"
            />
          </div>
        </div>
        <div className="contactButton">
          <Button type="submit" label="Bericht verzenden" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
