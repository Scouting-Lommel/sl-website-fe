'use client';

import Typography from '@/components/atoms/Typography';
import styles from './Login.css';
import { useState } from 'react';
import Button from '@/components/atoms/Button';
import Loader from '@/components/atoms/Loader';
import { addCookie } from '@/api/cookies';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

const Login = () => {
  const [isLoading, setLoading] = useState(false);

  const tryLogin = async (event: any) => {
    event.preventDefault();
    setLoading(true);

    const data = {
      username: event.target.elements.username.value,
      password: event.target.elements.password.value,
    };
    const JSONdata = JSON.stringify(data);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };
    const response = await fetch('/api/login', options);
    const result = await response.json();
    setLoading(false);
    if (response.status !== 200) {
      console.log('Login unsuccesfull' + response.status + '\n Error message: ' + result.data);
      return;
    }
    addCookie('leader', result.token);
    location.reload();
  };

  return (
    <div>
      <form onSubmit={tryLogin} className="login__form">
        <h2 className="t-headline-2 t-align-center">Login</h2>
        <label htmlFor="username" className="login__label">
          <Typography>Gebruikersnaam</Typography>
          <input
            className="login__input"
            id="username"
            name="username"
            type="text"
            placeholder="Gebruikersnaam"
            autoComplete="username"
            required
          />
        </label>
        <label htmlFor="password" className="login__label">
          <Typography>Wachtwoord</Typography>
          <input
            className="login__input"
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="****************"
            required
          />
        </label>
        {!isLoading && (
          <Button type="submit" className="login__button">
            Log In
          </Button>
        )}
        {isLoading && (
          <div className="login__loader">
            <Loader />
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;
