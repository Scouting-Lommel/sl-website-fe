'use client';

import { signIn } from 'next-auth/react';

const Login = () => {
  return (
    <button type="button" onClick={() => signIn()}>
      sign in
    </button>
  );
};

export default Login;
