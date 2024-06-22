import { useContext } from 'react';
import { FormContext } from '@/lib/contexts/FormContext';
import { FormStatus } from '@/lib/constants/enums/formStatus';
import { generalEmailAddress } from '@/lib/constants/emailAddress';
import { Email, generateEmail } from '@/lib/helpers/sendEmail';
import { registerMember } from '@/lib/helpers/registerMember';
import generateFormDataWithLabel from '@/lib/helpers/generateFormDataWithLabel';
import Banner from '@/components/atoms/Banner';
import { FormField } from '@/components/organisms/Forms/FormBuilder/FormField/types';
import RegisterForm from './RegisterForm';
import RegisterConfirmation from './RegisterConfirmation';

const Register = (props: any) => {
  const { formStatus, setFormStatus } = useContext(FormContext);
  let registerPrice = props.memberPrice;

  const initialValues = {};

  const submitForm = (data: any, formFields: FormField[]) => {
    const captchaToken = data['captcha-token'];
    const member = { ...data };

    member.isAkabe = member.isAkabe ? true : false;

    delete data['terms-and-conditions'];
    delete data['captcha-token'];
    delete data['isAkabe'];

    if (data.memberGroup === 'Leiding') {
      registerPrice = props.leaderPrice;
    }

    const email: Email = generateEmail({
      formTitle: 'Nieuwe inschrijving via Scouting Lommel website',
      formData: generateFormDataWithLabel(data, formFields),
      to: generalEmailAddress,
    });

    const callback = (resp: any) => {
      if (resp.status === 200) {
        setFormStatus(FormStatus.STATUS_SUCCESS);
        return;
      }

      setFormStatus(FormStatus.STATUS_ERROR);
    };

    registerMember({ email, member, callback, captchaToken });
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
          <Banner variant="success">Je inschrijving is met succes verstuurd!</Banner>
          <RegisterConfirmation price={registerPrice} bankAccountNumber={props.bankAccountNumber} />
        </>
      )}

      {formStatus !== FormStatus.STATUS_SUCCESS && (
        <RegisterForm initialValues={initialValues} submitForm={submitForm} />
      )}
    </>
  );
};

export default Register;
