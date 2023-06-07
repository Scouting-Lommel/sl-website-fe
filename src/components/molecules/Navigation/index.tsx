// TODO: Re-add security and authentication functionality

import NavItem from '@/components/molecules/NavItem';
import { Navigation as NavigationProps } from './types';
import styles from './Navigation.module.scss';

type Props = NavigationProps & React.HTMLAttributes<HTMLElement>;

const Navigation = ({ navItems, groups, rentalLocations }: Props) => {
  return (
    <nav className={styles['navigation__wrapper']}>
      <ul className={styles['navigation']}>
        <span className={styles['navigation__list']}>
          {navItems.map((navItem, i) => {
            const dropdownBtn = navItem.dropdownButton
              ? {
                  label: navItem.dropdownButton.label,
                  href: navItem.dropdownButton.link,
                  variant: navItem.dropdownButton.variant,
                }
              : undefined;
            return (
              <NavItem
                key={`nav-item-${i}`}
                label={navItem.label}
                href={`/${navItem.page.replace(new RegExp('_', 'g'), '-')}` || navItem.link || ''}
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
      </ul>
    </nav>
  );
};

export default Navigation;
