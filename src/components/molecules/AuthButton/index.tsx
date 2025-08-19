'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import type { JSX } from 'react';
import { useTranslations } from 'use-intl';
import { checkOrganisationPermission } from '@/lib/helpers/checkOrganisationPermission';
import { Button } from '@/components/atoms/Button/types';
import { DropdownItem } from '@/components/molecules/Dropdown/types';
import { DropdownCta } from '@/components/molecules/Dropdown/types';
import NavItem from '@/components/molecules/NavItem';

const NavAuthButton = ({ session }: { session: any }): JSX.Element => {
  const t = useTranslations('dashboard.authButton');

  const getDropdownItems = (): DropdownItem[] => {
    const items: DropdownItem[] = [
      {
        label: t('dropdownItems.groups.title'),
        page: 'dashboard',
        link: '/dashboard/takken',
        description: t('dropdownItems.groups.description'),
      },
      {
        label: t('dropdownItems.manuals.title'),
        page: 'manuals',
        link: '/handleidingen',
        description: t('dropdownItems.manuals.description'),
      },
    ];

    if (session) {
      if (session.orgUnit && checkOrganisationPermission(session.orgUnit, 'adminpanel')) {
        items.push({
          label: t('dropdownItems.adminPanel.title'),
          page: 'dashboard',
          link: 'https://admin.scoutinglommel.be/admin',
          description: t('dropdownItems.adminPanel.description'),
          modTargetBlank: true,
        });
      }
    }

    return items;
  };

  const getDropdownCta = (): DropdownCta => {
    if (session) {
      return {
        title: session.user?.name || t('leaderProfile'),
        intro: t('loggedInAs', { role: session.role }),
        ctaLabel: t('signOut'),
        ctaOnClick: () => signOut(),
      };
    }
    return {
      title: t('welcome'),
      intro: t('notLoggedIn'),
      ctaLabel: t('login'),
      ctaOnClick: () => signIn(),
    };
  };

  const getDropdownButton = (): Button => ({
    label: t('toTheDashboard'),
    href: '/dashboard',
    variant: 'primary',
  });

  return (
    <NavItem
      itemKey={99}
      label={t('leaderMenu')}
      href="/dashboard"
      dropdownItems={getDropdownItems()}
      dropdownButton={getDropdownButton()}
      dropdownCta={getDropdownCta()}
      dropdownTitle={t('leaderMenu')}
      modDropdown
    />
  );
};

const AuthButton = (): JSX.Element => {
  const { data: session } = useSession();

  return <NavAuthButton session={session} />;
};

export default AuthButton;
export { NavAuthButton };
