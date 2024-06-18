import { useContext } from 'react';
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
  const { setFormStatus } = useContext(FormContext);

  const setFormReady = () => {
    setFormStatus(FormStatus.STATUS_READY);
  };

  return (
    <div>
      <p>
        Welkom (terug) bij Scouting Sint-Pieter Lommel! Om je inschrijving volledig af te ronden
        vragen we je om het totale bedrag van het inschrijvingsgeld te storten. Kom je in aanmerking
        voor{' '}
        <a href="https://www.scoutsengidsenvlaanderen.be/ouders/praktisch/lidgeld/scouting-op-maat">
          het scouting op maat-programma
        </a>{' '}
        en wens je hiervan gebruik te maken? Stuur dan een e-mail naar de groepsleiding via{' '}
        <a href={`mailto:${generalEmailAddress}`}>{generalEmailAddress}</a>.
      </p>
      <p>
        <ul>
          <li>
            <span className="t-weight-bold">Te betalen:</span> &euro; {price}
          </li>
          <li>
            <span className="t-weight-bold">Rekeningnummer:</span> {bankAccountNumber}
          </li>
          <li>
            <span className="t-weight-bold">Mededeling:</span> &quot;Inschrijving Voornaam
            Familienaam {getCurrentWorkingYear()}&quot;
          </li>
        </ul>
      </p>
      <p>
        Je inschrijving is pas definitief na betaling. Wil je weten waarvoor je inschrijvingsgeld
        wordt gebruikt? Neem dan een kijkje bij de{' '}
        <a href="/algemene-informatie#veelgestelde-vragen">veelgestelde vragen</a>.
      </p>

      <Button label="Een ander lid inschrijven" onClick={setFormReady} />
    </div>
  );
};

export default RegisterConfirmation;
