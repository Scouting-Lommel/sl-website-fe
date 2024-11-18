import { useContext, useState } from 'react';
import { useTranslations } from 'next-intl';
import { FormContext } from '@/lib/contexts/FormContext';
import { FormStatus } from '@/lib/constants/enums/formStatus';
import { registerEmailAddress } from '@/lib/constants/emailAddress';
import { Email, generateEmail } from '@/lib/helpers/sendEmail';
import { registerMember } from '@/lib/helpers/registerMember';
import { generateFormDataWithLabel } from '@/lib/helpers/generateFormDataWithLabel';
import Banner from '@/components/atoms/Banner';
import RegisterConfirmation from './Confirmation';
import { FormField } from '@/components/organisms/Forms/FormBuilder/FormField/types';
import RegisterForm from './RegisterForm';

const Register = (props: any) => {
  const t = useTranslations('forms.registerForm');

  const { formStatus, setFormStatus } = useContext(FormContext);
  const [registerPrice, setRegisterPrice] = useState<number>(props.memberPrice);

  const initialValues = {};

  const submitForm = (data: any, formFields: FormField[]) => {
    const captchaToken = data['captcha-token'];
    const member = { ...data };

    member.isAkabe = member.isAkabe ? true : false;

    delete data['terms-and-conditions'];
    delete data['captcha-token'];
    delete data['isAkabe'];

    if (data.memberGroup === 'Leiding') {
      setRegisterPrice(props.leaderPrice);
    }

    const email: Email = generateEmail({
      formTitle: t('email.title'),
      formData: generateFormDataWithLabel(data, formFields),
      to: registerEmailAddress,
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
        <Banner variant="info">{t('formStatus.loading')}</Banner>
      )}
      {formStatus === FormStatus.STATUS_ERROR && (
        <Banner variant="error">{t('formStatus.error')}</Banner>
      )}
      {(formStatus === FormStatus.STATUS_CAPTCHA_NOT_VERIFIED ||
        formStatus === FormStatus.STATUS_CAPTCHA_ERROR) && (
        <Banner variant="error">{t('formStatus.captchaError')}</Banner>
      )}
      {formStatus === FormStatus.STATUS_SUCCESS && (
        <>
          <Banner variant="success">{t('formStatus.success')}</Banner>
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
