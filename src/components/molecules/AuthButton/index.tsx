'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import { checkOrganisationPermission } from '@/lib/helpers/checkOrganisationPermission';
import NavItem from '@/components/molecules/NavItem';
import { DropdownItem } from '@/components/molecules/Dropdown/types';
import { DropdownCta } from '@/components/molecules/Dropdown/types';
import { Button } from '@/components/atoms/Button/types';

const AuthButton = () => {
  const { data: session } = useSession();

  if (session) {
    const dropdownItems: DropdownItem[] = [];
    const dropdownCta: DropdownCta = {
      title: session?.user?.name || 'Leidersprofiel',
      intro: `Ingelogd als **${session?.role}**`,
      ctaLabel: 'Uitloggen',
      ctaOnClick: () => signOut(),
    };
    const dropdownButton: Button = {
      label: 'Naar het dashboard',
      href: '/dashboard',
      variant: 'primary',
    };

    if (session.orgUnit && checkOrganisationPermission(session.orgUnit, 'groups')) {
      dropdownItems.push({
        label: 'Takken',
        page: 'dashboard',
        link: '/dashboard/takken',
        description: 'Takken beheren',
      });
    }

    return (
      <NavItem
        itemKey={99}
        label="Leidingsmenu"
        href="/dashboard"
        dropdownItems={dropdownItems}
        dropdownButton={dropdownButton}
        dropdownCta={dropdownCta}
        dropdownTitle="Dashboard"
        modDropdown
      />
    );
  }

  return <NavItem itemKey={99} label="Inloggen" onClick={() => signIn()} modButton />;
};

export default AuthButton;
