'use client';

import RegisterChild from '@/components/molecules/RegisterChild';
import styles from './Register.css';
import Button from '@/components/atoms/Button';
import Typography from '@/components/atoms/Typography';
import { useState } from 'react';
import Loader from '@/components/atoms/Loader';
import { Register as RegisterProps } from './types';
import Input from '@/components/atoms/FormInput';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = RegisterProps & React.HTMLAttributes<HTMLElement>;

const Register = ({ bankAccount, leaderPrice, childPrice }: Props) => {
  const [responseMessage, setResponse] = useState('');

  const handleSubmit = async (event: any) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();
    setResponse('loading');

    const collectiveData = {
      street: event.target.elements.street.value,
      houseNumber: event.target.elements.number.value,
      busNumber: event.target.elements.bus.value,
      arealCode: event.target.elements.Postcode.value,
      city: event.target.elements.City.value,
      email: event.target.elements.email.value,
      phoneNumber: event.target.elements.tel.value,
    };

    // for each child do an api call

    for (let i = 1; i < 10; i++) {
      if (!event.target.elements['firstname' + i]) break;
      const childData = {
        firstName: event.target.elements['firstname' + i].value,
        lastName: event.target.elements['lastname' + i].value,
        birthDate: event.target.elements['birthdate' + i].value,
        akabe: event.target.elements['akabe' + i].checked,
        sex: event.target.elements['Sex' + i].value,
      };

      const formData = { ...collectiveData, ...childData };
      const JSONdata = JSON.stringify(formData);
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSONdata,
      };
      const response = await fetch('/api/register-user', options);
      const result = await response.json();
      if (response.status !== 200) {
        console.log(
          'something went wrong trying to resolve the request:\n Status code:' +
            response.status +
            '\n Error message: ' +
            result.data,
        );
        return;
      }
    }
    // create the response message
    let response = `Succes!!\n\n
    U bent succesvol ingeschreven voor het nieuwe scoutsjaar, hierbij de details van uw inschrijving:\n
    `;
    let totaal = 0;
    for (let i = 1; i < 10; i++) {
      if (!event.target.elements['firstname' + i]) break;
      const prijs =
        new Date().getFullYear() - new Date(event.target.elements['birthdate' + i]).getFullYear() >
          17 && !event.target.elements['akabe' + i].checked
          ? leaderPrice
          : childPrice;
      response += `\t${event.target.elements['firstname' + i].value} ${
        event.target.elements['lastname' + i].value
      }\t\t\t${prijs} euro \n`;
      totaal += prijs;
    }
    response += `\tTotaal: ${totaal} euro\n\n`;
    response += `Gelieve dit bedrag te storten op het rekeningnummer ${bankAccount}\n\n`;
    response += `Ter bevestiging is er ook een email gestuurd naar ${event.target.elements.email.value}\n\n`;
    response += 'Stevige linker';

    // email the user
    const emailData = {
      emailAddress: event.target.elements.email.value,
      subject: 'Inschrijving Scouting Lommel',
      body: response,
    };
    const emailJSONdata = JSON.stringify(emailData);
    const emailoptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: emailJSONdata,
    };
    const emailresponse = await fetch('/api/send-mail', emailoptions);
    const emailresult = await emailresponse.json();
    if (emailresponse.status !== 200) {
      console.log(
        'something went wrong trying to send the mail:\n Status code:' +
          emailresult.status +
          '\n Error message: ' +
          emailresult.data,
      );
      return;
    }

    // set the display message for the payment
    setResponse(response);
  };

  return (
    <div className="sl-layout register-form">
      {responseMessage === '' && (
        <form onSubmit={(event) => handleSubmit(event)} noValidate={false}>
          <div className="register-form__street-address">
            <Input label="Straatnaam:" type="text" id="street" name="street" required />
            <Input label="Huisnummer:" type="text" id="number" name="number" required />
            <Input label="Bus:" type="text" id="bus" name="bus" />
          </div>
          <div className="register-form__postal">
            <Input label="Postcode:" type="text" id="Postcode" name="Postcode" />
            <Input label="Gemeente:" type="text" id="City" name="City" required />
          </div>
          <div className="register-form__personal">
            <Input label="Emailadres:" type="text" id="email" name="email" required />
            <Input label="Telefoonnummer:" type="text" id="tel" name="tel" required />
          </div>
          <RegisterChild index={1} key={1} first />
          <label htmlFor="privacy" className="register-form__privacy">
            <input type="checkbox" id="privacy" name="privacy" required />
            <Typography>
              Ik heb kennis genomen met de{' '}
              <a href="/privacy-policy">privacyverklaring van Scouting Lommel</a> en ga hiermee
              akkoord.
            </Typography>
          </label>
          <div className="register-form__submit">
            <Button label="Inschrijven" type="submit" />
          </div>
        </form>
      )}
      {responseMessage === 'loading' && (
        <div className="register-form__loader">
          <Loader />
        </div>
      )}
      {responseMessage !== 'loading' && responseMessage !== '' && (
        <Typography data={responseMessage} />
      )}
    </div>
  );
};

export default Register;
