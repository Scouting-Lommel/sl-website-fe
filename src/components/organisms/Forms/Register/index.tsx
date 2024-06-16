import { useContext } from 'react';
import { FormContext } from '@/lib/contexts/FormContext';
import { FormStatus } from '@/lib/constants/enums/formStatus';
import { Recipients } from '@/lib/constants/enums/recipients';
import { Email, generateEmail, sendEmail } from '@/lib/helpers/sendEmail';
import Banner from '@/components/atoms/Banner';
import RegisterForm from './RegisterForm';

const Register = () => {
  const { formStatus, setFormStatus } = useContext(FormContext);

  const initialValues = {};

  const submitForm = (data: any) => {};

  return (
    <>
      {formStatus === FormStatus.STATUS_LOADING && (
        <Banner variant="info">Formulier versturen...</Banner>
      )}
      {formStatus === FormStatus.STATUS_ERROR && (
        <Banner variant="error">
          Er ging iets mis bij het indienen van dit formulier. Probeer het later opnieuw.
        </Banner>
      )}
      {(formStatus === FormStatus.STATUS_CAPTCHA_NOT_VERIFIED ||
        formStatus === FormStatus.STATUS_CAPTCHA_ERROR) && (
        <Banner variant="error">
          Er ging iets mis met de Captcha check. Probeer het later opnieuw.
        </Banner>
      )}
      {formStatus === FormStatus.STATUS_SUCCESS && (
        <Banner variant="success">Je bericht is met succes verstuurd!</Banner>
      )}

      <RegisterForm initialValues={initialValues} submitForm={submitForm} />
    </>
  );
};

export default Register;
