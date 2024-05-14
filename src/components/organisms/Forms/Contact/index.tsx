'use client';

import { useState } from 'react';
import { generalEmailAddress, rentalsEmailAddress } from '@/lib/constants/emailAddress';
import { FormStatus } from '@/lib/constants/enums/formStatus';
import { Recipients } from '@/lib/constants/enums/recipients';
import { Email, generateEmail, sendEmail } from '@/lib/helpers/sendEmail';
import Banner from '@/components/atoms/Banner';
import ContactForm from './ContactForm';

const Contact = () => {
  const [status, setStatus] = useState(FormStatus.STATUS_READY);

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    recipient: Recipients.GENERAL,
    body: '',
  };

  const submitForm = (data: any) => {
    let recipient: string;

    switch (data.recipient) {
      case Recipients.RENTALS: {
        recipient = rentalsEmailAddress;
        break;
      }
      case Recipients.GROUP: {
        recipient = `${data.group}@scoutinglommel.be`;
        break;
      }
      default: {
        recipient = generalEmailAddress;
      }
    }

    delete data['recipient'];
    delete data['terms-and-conditions'];

    const email: Email = generateEmail({
      formTitle: 'Nieuwe inzending: contactformulier website',
      formData: data,
      to: recipient,
      replyTo: data.email,
    });

    const callback = (resp: any) => {
      if (resp.status === 200) setStatus(FormStatus.STATUS_SUCCESS);
      if (resp.status === 400) setStatus(FormStatus.STATUS_ERROR);
    };

    sendEmail({ email, callback });
  };

  return (
    <>
      {status === FormStatus.STATUS_LOADING && (
        <Banner variant="info">Formulier versturen...</Banner>
      )}
      {status === FormStatus.STATUS_ERROR && (
        <Banner variant="error">
          Er ging iets mis bij het indienen van dit formulier. Probeer het later opnieuw.
        </Banner>
      )}
      {status === FormStatus.STATUS_CAPTCHA_NOT_VERIFIED && (
        <Banner variant="error">
          Er ging iets mis met de Captcha check. Probeer het later opnieuw.
        </Banner>
      )}
      {status === FormStatus.STATUS_SUCCESS && (
        <Banner variant="success">Je bericht is met succes verstuurd!</Banner>
      )}

      <ContactForm initialValues={initialValues} submitForm={submitForm} setStatus={setStatus} />
    </>
  );
};

export default Contact;
