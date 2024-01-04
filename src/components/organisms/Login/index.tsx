// @ts-ignore
import styles from './Login.css';
import Icon from '@/components/atoms/Icon';
import { IconLock } from '@/assets/icons';
import { signIn, signOut } from 'next-auth/react';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

const Login = ({ session }: { session?: any }) => {
  const isLoggedIn = !!session;

  return (
    <li className="login" key="login">
      {!isLoggedIn && (
        <div
          className="login__button"
          onClick={() => {
            signIn();
          }}
          key="loggedIn"
        >
          Log in
          <Icon icon={IconLock} size="md" title="loginLock" className="login__lock" />
        </div>
      )}
      {isLoggedIn && (
        <div
          className="login__button"
          onClick={() => {
            signOut();
          }}
          key="loggedIn"
        >
          Log uit
          <Icon icon={IconLock} size="md" title="loginLock" className="login__lock" />
        </div>
      )}
    </li>
  );
};

export default Login;
