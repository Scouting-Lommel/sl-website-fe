'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

const UserProfile = () => {
  const { data: session } = useSession();

  if (!session) redirect('/');

  return (
    <section className="sl-layout">
      <h1>Gebruikersprofiel</h1>
      <div>
        {session && session.user && (
          <>
            <p>{session.user.name}</p>
            <p>{session.user.email}</p>
          </>
        )}
      </div>
    </section>
  );
};

export default UserProfile;

// TODO: NavItem & Dropdown dynamic types
// TODO: Profile dropdown
// TODO: Add user group guards (see Raycast AI)
