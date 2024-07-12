'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import NavItem from '@/components/molecules/NavItem';
import { DropdownItem } from '@/components/molecules/Dropdown/types';
import { DropdownCta } from '@/components/molecules/Dropdown/types';

const AuthButton = () => {
  const { data: session } = useSession();

  if (session) {
    const dropdownItems: DropdownItem[] = [
      {
        label: 'Takken',
        page: 'dashboard',
        link: '/dashboard',
        description: 'Takpagina beheren',
      },
      {
        label: 'Afbeeldingen',
        page: 'dashboard',
        link: '/dashboard',
        description: 'Fotogallerij beheren',
      },
      {
        label: 'Blog',
        page: 'dashboard',
        link: '/dashboard',
        description: 'Blogposts beheren',
      },
    ];
    const dropdownCta: DropdownCta = {
      title: session?.user?.name || 'Leidersprofiel',
      intro: '',
      ctaLabel: 'Uitloggen',
      ctaOnClick: () => signOut(),
    };

    return (
      <NavItem
        itemKey={99}
        label="Leidingsmenu"
        dropdownItems={dropdownItems}
        dropdownCta={dropdownCta}
        dropdownTitle="Dashboard"
        modDropdown
      />
    );
  }

  return <NavItem itemKey={99} label="Inloggen" onClick={() => signIn()} modButton />;
};

export default AuthButton;
