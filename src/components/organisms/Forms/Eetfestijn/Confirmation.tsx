import { useTranslations } from 'next-intl';
import { useContext } from 'react';
import { FormStatus } from '@/lib/constants/enums/formStatus';
import { FormContext } from '@/lib/contexts/FormContext';
import Button from '@/components/atoms/Button';
import { EetfestijnConfirmation as EetfestijnConfirmationProps } from './types';

const EetfestijnConfirmation = ({
  price,
  bankAccountNumber,
}: EetfestijnConfirmationProps): JSX.Element => {
  const t = useTranslations('forms.eetfestijnForm.confirmation');
  const { setFormStatus } = useContext(FormContext);

  const setFormReady = () => {
    setFormStatus(FormStatus.STATUS_READY);
  };

  return (
    <div>
      <p>Confirmation</p>

      <Button label={t('button.label')} onClick={setFormReady} />
    </div>
  );
};

export default EetfestijnConfirmation;
