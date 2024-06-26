import Button from '@/components/atoms/Button';

const ContactConfirmation = () => {
  return (
    <div>
      <p>
        Bedankt voor je bericht! We proberen je contactaanvraag zo snel mogelijk te beantwoorden.
      </p>
      <p>
        Heb je nog vragen? Neem dan zeker eens een kijkje bij onze{' '}
        <a href="/algemene-informatie#veelgestelde-vragen">veelgestelde vragen</a>.
      </p>

      <Button label="Terug naar de homepagina" href="/" />
    </div>
  );
};

export default ContactConfirmation;
