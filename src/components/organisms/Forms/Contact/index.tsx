import { useContext } from 'react';
import { generalEmailAddress, rentalsEmailAddress } from '@/lib/constants/emailAddress';
import { FormContext } from '@/lib/contexts/FormContext';
import { FormStatus } from '@/lib/constants/enums/formStatus';
import { Recipients } from '@/lib/constants/enums/recipients';
import { Email, generateEmail, sendEmail } from '@/lib/helpers/sendEmail';
import generateFormDataWithLabel from '@/lib/helpers/generateFormDataWithLabel';
import Banner from '@/components/atoms/Banner';
import ContactConfirmation from './Confirmation';
import { FormField } from '@/components/organisms/Forms/FormBuilder/FormField/types';
import ContactForm from './ContactForm';

const Contact = (props: any) => {
  const { formStatus, setFormStatus } = useContext(FormContext);

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    recipient: props.recipient || Recipients.GENERAL,
    group: props.group || '',
    body: '',
  };

  const submitForm = (data: any, formFields: FormField[]) => {
    let recipient: string;
    const captchaToken = data['captcha-token'];

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
    delete data['group'];
    delete data['terms-and-conditions'];
    delete data['captcha-token'];

    const email: Email = generateEmail({
      formTitle: 'Nieuwe inzending: contactformulier website',
      formData: generateFormDataWithLabel(data, formFields),
      to: recipient,
      replyTo: data.email,
    });

    const callback = (resp: any) => {
      if (resp.status === 200) {
        setFormStatus(FormStatus.STATUS_SUCCESS);
        return;
      }

      setFormStatus(FormStatus.STATUS_ERROR);
    };

    sendEmail({ email, callback, captchaToken });
  };

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
        <>
          <Banner variant="success">Je bericht is met succes verstuurd!</Banner>
          <ContactConfirmation />
        </>
      )}

      {formStatus !== FormStatus.STATUS_SUCCESS && (
        <ContactForm initialValues={initialValues} submitForm={submitForm} />
      )}
    </>
  );
};

export default Contact;
