import { useContext, useState } from 'react';
import { useTranslations } from 'next-intl';
import { FormContext } from '@/lib/contexts/FormContext';
import { FormStatus } from '@/lib/constants/enums/formStatus';
import Banner from '@/components/atoms/Banner';
import EetfestijnConfirmation from './Confirmation';
import { FormField } from '@/components/organisms/Forms/FormBuilder/FormField/types';
import EetfestijnForm from './EetfestijnForm';

const Eetfestijn = (props: any) => {
  const t = useTranslations('forms.eetfestijnForm');

  const { formStatus, setFormStatus } = useContext(FormContext);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const initialValues = {
    pizza_margherita: 0,
    pizza_hawai: 0,
    pizza_pollo: 0,
    paymentMethod: 'onSite',
  };

  const submitForm = (data: any, formFields: FormField[]) => {
    console.log(data);
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
          <EetfestijnConfirmation price={totalPrice} bankAccountNumber={props.bankAccountNumber} />
        </>
      )}

      {formStatus !== FormStatus.STATUS_SUCCESS && (
        <EetfestijnForm initialValues={initialValues} submitForm={submitForm} />
      )}
    </>
  );
};

export default Eetfestijn;
