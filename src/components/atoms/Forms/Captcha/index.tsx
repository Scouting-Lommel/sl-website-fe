import Turnstile from 'react-turnstile';

const Captcha = () => {
  return (
    <Turnstile
      style={{
        minHeight: '65px',
        minWidth: '300px',
        maxWidth: '100%',
      }}
      sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
    />
  );
};

export default Captcha;
