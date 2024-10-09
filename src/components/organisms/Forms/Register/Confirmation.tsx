import { useContext } from 'react';
import { useTranslations } from 'next-intl';
import { FormContext } from '@/lib/contexts/FormContext';
import getCurrentWorkingYear from '@/lib/helpers/getCurrentWorkingYear';
import { FormStatus } from '@/lib/constants/enums/formStatus';
import { generalEmailAddress } from '@/lib/constants/emailAddress';
import Button from '@/components/atoms/Button';

type Props = {
  price: number;
  bankAccountNumber: string;
};

const RegisterConfirmation = ({ price, bankAccountNumber }: Props) => {
  const t = useTranslations('forms.registerForm.confirmation');
  const { setFormStatus } = useContext(FormContext);

  const setFormReady = () => {
    setFormStatus(FormStatus.STATUS_READY);
  };

  return (
    <div>
      <p>
        {t.rich('intro', {
          link: (chunks) => (
            <a href="https://www.scoutsengidsenvlaanderen.be/ouders/praktisch/lidgeld/scouting-op-maat">
              {chunks}
            </a>
          ),
          mail: (chunks) => <a href={`mailto:${generalEmailAddress}`}>{chunks}</a>,
          email: generalEmailAddress,
        })}
      </p>

      <ul>
        <li>
          {t.rich('summary.price', {
            bold: (chunks) => <span className="t-weight-bold">{chunks}</span>,
            price,
          })}
        </li>
        <li>
          {t.rich('summary.accountNo', {
            bold: (chunks) => <span className="t-weight-bold">{chunks}</span>,
            accountNo: bankAccountNumber,
          })}
        </li>
        <li>
          {t.rich('summary.message', {
            bold: (chunks) => <span className="t-weight-bold">{chunks}</span>,
            workingYear: getCurrentWorkingYear(),
          })}
        </li>
      </ul>

      <p>
        {t.rich('body', {
          link: (chunks) => <a href="/algemene-informatie#veelgestelde-vragen">{chunks}</a>,
        })}
      </p>

      <Button label={t('button.label')} onClick={setFormReady} />
    </div>
  );
};

export default RegisterConfirmation;
