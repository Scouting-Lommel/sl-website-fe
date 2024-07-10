'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import NavItem from '@/components/molecules/NavItem';

const AuthButton = () => {
  const { data: session } = useSession();

  if (session) {
    return <NavItem itemKey={99} label="Uitloggen" onClick={() => signOut()} modButton />;
  }

  return <NavItem itemKey={99} label="Inloggen" onClick={() => signIn()} modButton />;
};

export default AuthButton;
