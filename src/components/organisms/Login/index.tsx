'use client';

import styles from './Login.css';
import { useEffect, useState } from 'react';
import { hasCookie, removeCookie } from '@/api/cookies';
import Modal from '@/components/molecules/Modal';
import Icon from '@/components/atoms/Icon';
import { IconLock } from '@/assets/icons';
import LoginForm from '@/components/molecules/LoginForm';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    setIsLoggedIn(hasCookie('leader'));
  }, [isLoggedIn]);

  return (
    <li className="login" key="login">
      {!isLoggedIn && (
        <Modal
          button={
            <div className="login__button">
              Log in
              <Icon icon={IconLock} size="md" title="loginLock" className="login__lock" />
            </div>
          }
          modalData={<LoginForm />}
          cardClass="login__card"
          key="notLoggedIn"
        />
      )}
      {isLoggedIn && (
        <div
          className="login__button"
          onClick={() => {
            removeCookie('leader');
            location.reload();
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
