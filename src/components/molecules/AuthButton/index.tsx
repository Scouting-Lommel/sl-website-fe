'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import { useTranslations } from 'use-intl';
import { checkOrganisationPermission } from '@/lib/helpers/checkOrganisationPermission';
import { Button } from '@/components/atoms/Button/types';
import { DropdownItem } from '@/components/molecules/Dropdown/types';
import { DropdownCta } from '@/components/molecules/Dropdown/types';
import NavItem from '@/components/molecules/NavItem';

const NavAuthButton = ({ session }: { session: any }): JSX.Element => {
  const t = useTranslations('dashboard.authButton');

  if (session) {
    const dropdownItems: DropdownItem[] = [];
    const dropdownCta: DropdownCta = {
      title: session.user?.name || t('leaderProfile'),
      intro: t('loggedInAs', { role: session.role }),
      ctaLabel: t('signOut'),
      ctaOnClick: () => signOut(),
    };
    const dropdownButton: Button = {
      label: t('toTheDashboard'),
      href: '/dashboard',
      variant: 'primary',
    };

    if (session.orgUnit && checkOrganisationPermission(session.orgUnit, 'groups')) {
      dropdownItems.push({
        label: t('groups'),
        page: 'dashboard',
        link: '/dashboard/takken',
        description: t('manageGroups'),
      });
    }

    return (
      <NavItem
        itemKey={99}
        label={t('leaderMenu')}
        href="/dashboard"
        dropdownItems={dropdownItems}
        dropdownButton={dropdownButton}
        dropdownCta={dropdownCta}
        dropdownTitle={t('dashboard')}
        modDropdown
      />
    );
  }

  return (
    <NavItem itemKey={99} label={t('login')} href="/inloggen" onClick={() => signIn()} modButton />
  );
};

const AuthButton = (): JSX.Element => {
  const { data: session } = useSession();

  return <NavAuthButton session={session} />;
};

export default AuthButton;
export { NavAuthButton };
