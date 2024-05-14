'use client';

import { useState } from 'react';
import { generalEmailAddress, rentalsEmailAddress } from '@/lib/constants/emailAddress';
import { FormStatus } from '@/lib/constants/enums/formStatus';
import { Recipients } from '@/lib/constants/enums/recipients';
import { Email, generateEmail, sendEmail } from '@/lib/helpers/sendEmail';
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
      {status === FormStatus.STATUS_LOADING && <>Loading</>}
      {status === FormStatus.STATUS_ERROR && <>Error</>}
      {status === FormStatus.STATUS_SUCCESS && <>Success</>}
      <ContactForm initialValues={initialValues} submitForm={submitForm} setStatus={setStatus} />
    </>
  );
};

export default Contact;
