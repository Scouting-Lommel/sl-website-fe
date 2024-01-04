// TODO: Re-add security and authentication functionality

import NavItem from '@/components/molecules/NavItem';
import { Navigation as NavigationProps } from './types';
// @ts-ignore
import styles from './Navigation.css';
import Login from '@/components/organisms/Login';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = NavigationProps & React.HTMLAttributes<HTMLElement>;

const Navigation = ({ navItems, groups, rentalLocations, session }: Props) => {
  return (
    <nav className="navigation__wrapper">
      <ul className="navigation">
        <span className="navigation__list">
          {navItems.map((navItem, i) => {
            const dropdownBtn = navItem.dropdownButton
              ? {
                  label: navItem.dropdownButton.label,
                  href: navItem.dropdownButton.link,
                  variant: navItem.dropdownButton.variant,
                }
              : undefined;
            const href = `/${
              navItem.page === 'home'
                ? ''
                : navItem.page.replace(new RegExp('_', 'g'), '-') || navItem.link || ''
            }`;
            return (
              <NavItem
                key={`nav-item-${i}`}
                itemKey={i}
                label={navItem.label}
                href={href}
                dropdownItems={navItem.dropdownItems}
                dropdownCta={navItem.dropdownCta}
                dropdownTitle={navItem.dropdownTitle}
                dropdownButton={dropdownBtn}
                groups={groups}
                rentalLocations={rentalLocations}
                modDropdown={navItem.dropdownItems.length > 0}
              />
            );
          })}
        </span>
        <Login session={session} />
      </ul>
    </nav>
  );
};

export default Navigation;
