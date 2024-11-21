import { StylesheetLink } from '@/types/StyleSheetLink';
import AuthButton from '@/components/molecules/AuthButton';
import NavItem from '@/components/molecules/NavItem';
import styles from './Navigation.css';
import { Navigation as NavigationProps } from './types';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

const Navigation = ({ navItems, groups, rentalLocations }: NavigationProps): JSX.Element => {
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
        <span className="navigation__list">
          <AuthButton />
        </span>
      </ul>
    </nav>
  );
};

export default Navigation;
