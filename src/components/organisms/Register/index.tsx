'use client';

import RegisterChild from '@/components/molecules/RegisterChild';
import styles from './Register.css';
import Button from '@/components/atoms/Button';
import Typography from '@/components/atoms/Typography';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

const Register = () => {
  const handleSubmit = async (event: any) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    const data = '';

    // Send the data to the nextjs server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = '/api/register_user';

    // Form the request for sending data to the server.
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);
    const result = await response.json();
    if (response.status != 200) {
      alert(
        'something went wrong trying to resolve the request:\n Status code:' +
          response.status +
          '\n Error message: ' +
          result.data,
      );
      return;
    }
  };

  return (
    <div className="sl-layout register">
      <form onSubmit={(event) => handleSubmit(event)} noValidate={false}>
        <div className="register__streetaddress">
          <label htmlFor="street">
            <Typography>Straatnaam:</Typography>
            <input type="text" id="street" name="street" required />
          </label>
          <label htmlFor="number">
            <Typography>Huisnummer:</Typography>
            <input type="text" id="number" name="number" required />
          </label>
          <label htmlFor="bus">
            <Typography>Bus:</Typography>
            <input type="text" id="bus" name="bus" />
          </label>
        </div>
        <div className="register__postal">
          <label htmlFor="Postcode">
            <Typography>Postcode:</Typography>
            <input type="text" id="Postcode" name="Postcode" />
          </label>
          <label htmlFor="City">
            <Typography>Gemeente:</Typography>
            <input type="text" id="City" name="City" required />
          </label>
        </div>
        <div className="register__personal">
          <label htmlFor="email">
            <Typography>Emailadres:</Typography>
            <input type="text" id="email" name="email" required />
          </label>
          <label htmlFor="tel">
            <Typography>Telefoonnummer:</Typography>
            <input type="text" id="tel" name="tel" required />
          </label>
        </div>
        <RegisterChild index={1} key={1} first />
        <div className="register__submit">
          <Button label="Inschrijven" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Register;
