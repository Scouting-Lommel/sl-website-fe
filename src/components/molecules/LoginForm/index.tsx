'use client'

import Typography from '@/components/atoms/Typography';
import styles from './LoginForm.css';
import Button from '@/components/atoms/Button';
import { signIn } from "next-auth/react"
import { useSearchParams } from 'next/navigation'

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

const LoginForm = () => {
  const searchParams = useSearchParams()
  const callbackURL = searchParams?.get('callbackUrl') || "/"
  
  const tryLogin = async (event: any) => {
    event.preventDefault()
    
    await signIn("credentials", { 
      email: event.target.elements.email.value, 
      password: event.target.elements.password.value,
      callbackUrl: callbackURL
    })
  };

  return (
    <div>
      <form onSubmit={tryLogin} className="login-form">
        <h2 className="t-headline-2 t-align-center">Log in</h2>
        <label htmlFor="email" className="login-form__label">
          <Typography>Gebruikersnaam</Typography>
          <input
            className="login-form__input"
            id="email"
            name="email"
            type="text"
            placeholder="Gebruikersnaam"
            autoComplete="username"
            required
          />
        </label>
        <label htmlFor="password" className="login-form__label">
          <Typography>Wachtwoord</Typography>
          <input
            className="login-form__input"
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="****************"
            required
          />
        </label>
        <Button type="submit" className="login-form__button">
          Log In
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
