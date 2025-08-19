import { useContext, type JSX } from 'react';
import Turnstile from 'react-turnstile';
import { FormStatus } from '@/lib/constants/enums/formStatus';
import { FormContext } from '@/lib/contexts/FormContext';

const Captcha = (): JSX.Element => {
  const { setFormStatus } = useContext(FormContext);

  return (
    <Turnstile
      style={{
        minHeight: '65px',
        minWidth: '300px',
        maxWidth: '100%',
      }}
      theme="light"
      refreshExpired="auto"
      onError={() => setFormStatus(FormStatus.STATUS_CAPTCHA_ERROR)}
      sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
    />
  );
};

export default Captcha;
