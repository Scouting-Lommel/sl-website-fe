'use client';

import { signOut } from 'next-auth/react';

const Logout = () => {
  return (
    <>
      <p>Authenticated</p>
      <button type="button" onClick={() => signOut()}>
        sign out
      </button>
    </>
  );
};

export default Logout;
