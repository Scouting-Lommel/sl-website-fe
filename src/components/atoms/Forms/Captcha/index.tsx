import { useContext } from 'react';
import Turnstile from 'react-turnstile';
import { FormContext } from '@/lib/contexts/FormContext';
import { FormStatus } from '@/lib/constants/enums/formStatus';

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
