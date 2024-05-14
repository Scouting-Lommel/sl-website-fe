'use client';

import { useState } from 'react';
import { FormStatus } from '@/lib/constants/enums/formStatus';
import { Recipients } from '@/lib/constants/enums/recipients';
import ContactForm from './ContactForm';

const Contact = ({}) => {
  const [status, setStatus] = useState(FormStatus.STATUS_READY);

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    recipient: Recipients.GENERAL,
    body: '',
  };

  const submitForm = (data: any) => {
    console.log(data);
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
