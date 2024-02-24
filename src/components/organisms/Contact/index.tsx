'use client';

import { useState } from 'react';
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
      console.log('Gelieve uw naam in te geven');
      return;
    }
    if (!event.target.email.value) {
      console.log('Gelieve uw email in te geven');
      return;
    }
    if (!event.target.selection.value) {
      console.log('Gelieve een geldig onderwerp te selecteren');
      return;
    }
    if (!event.target.emailBody.value) {
      console.log('Gelieve uw bericht in te geven');
      return;
    }
    let email = event.target.selection.value;
    if (email == 'Takken') {
      console.log(event.target.takselection.value);
      email = event.target.takselection.value;
    }
    let data: Record<string, string> = {
      subject: `Email van ${event.target.name.value}, antwoorden naar ${event.target.email.value}`,
      emailSender: event.target.email.value,
      emailAddress: email,
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

    const response = await fetch('/api/send-mail', options);
    const result = await response.json();

    if (response.status != 200) {
      console.log(
        'something went wrong trying to resolve the request:\n Status code:' +
          response.status +
          '\n Error message: ' +
          result.data,
      );
      return;
    }

    console.log('success!');
    setStatus('success');
  };

  const [currVal, setVal] = useState('');
  const [status, setStatus] = useState('');

  return (
    <>
      <form onSubmit={(event) => handleContact(event)} noValidate={false}>
        <div className="contact__user-info">
          <div className="contact__user-info__item">
            <Typography>
              <label htmlFor="name">Naam</label>
            </Typography>
            <input className="contact__input" type="text" id="name" name="name" required />
          </div>
          <div className="contact__user-info__item">
            <Typography>
              <label htmlFor="email">Emailadres</label>
            </Typography>
            <input className="contact__input" type="text" id="email" name="email" required />
          </div>
        </div>
        <div className="contact__subject">
          <div className="contact__user-info__item">
            <Typography>
              <label htmlFor="selection">Onderwerp</label>
            </Typography>
            <select id="selection" name="selection" onChange={(e) => setVal(e.target.value)}>
              {subjectOptions.map((subject, i) => {
                return (
                  <option key={i} value={subject.emailAddress} id={subject.label}>
                    {subject.label}
                  </option>
                );
              })}
            </select>
          </div>
          {currVal == 'Takken' && (
            <div className="contact__user-info__item">
              <Typography>
                <label htmlFor="selection">Tak</label>
              </Typography>
              <select id="takselection" name="takselection" title="takselection" required>
                <option disabled selected value="">
                  --- Kies een tak ---
                </option>
                {['Kapoenen', 'Welpen', 'Akabe', 'Jonggivers', 'Givers', 'Jin'].map(
                  (subject, i) => {
                    return (
                      <option
                        key={i}
                        value={subject + '@scoutinglommel.be'}
                        id={subject + '-email'}
                      >
                        {subject}
                      </option>
                    );
                  },
                )}
              </select>
            </div>
          )}
        </div>
        <div className="contact__body">
          <div className="contact__body__items">
            <Typography>
              <label htmlFor="emailBody">Bericht</label>
            </Typography>
            <textarea
              className="contact__input contact__input--large"
              id="emailBody"
              name="emailBody"
              required
            />
          </div>
        </div>
        <div className="contact__button">
          <Button type="submit" label="Bericht verzenden" />
          {status === 'success' && <div>Gelukt!</div>}
        </div>
      </form>
    </>
  );
};

export default Contact;
