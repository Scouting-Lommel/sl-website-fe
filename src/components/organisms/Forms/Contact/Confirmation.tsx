import { useTranslations } from 'next-intl';
import Button from '@/components/atoms/Button';

const ContactConfirmation = () => {
  const t = useTranslations('forms.contactForm.confirmation');

  return (
    <div>
      <p>{t('title')}</p>
      <p>
        {t.rich('body', {
          link: (chunks) => <a href="/algemene-informatie#veelgestelde-vragen">{chunks}</a>,
        })}
      </p>

      <Button label={t('button.label')} href="/" />
    </div>
  );
};

export default ContactConfirmation;
