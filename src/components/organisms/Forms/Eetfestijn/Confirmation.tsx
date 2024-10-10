import { useContext } from 'react';
import { useTranslations } from 'next-intl';
import { FormContext } from '@/lib/contexts/FormContext';
import { FormStatus } from '@/lib/constants/enums/formStatus';
import Button from '@/components/atoms/Button';

type Props = {
  price: number;
  bankAccountNumber: string;
};

const EetfestijnConfirmation = ({ price, bankAccountNumber }: Props) => {
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
