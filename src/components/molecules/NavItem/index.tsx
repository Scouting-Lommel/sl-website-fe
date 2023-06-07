import classNames from 'classnames';
import Link from 'next/link';
import { useState } from 'react';
import { IconChevronDown } from '@/assets/icons';
import Icon from '@/components/atoms/Icon';
import Dropdown from '@/components/molecules/Dropdown';
import { NavItem as NavItemProps } from './types';
import styles from './NavItem.module.scss';

type Props = NavItemProps & React.HTMLAttributes<HTMLElement>;

const NavItem = ({
  label,
  href,
  dropdownItems,
  dropdownCta,
  dropdownTitle,
  dropdownButton,
  groups,
  rentalLocations,
  modButton,
  modDropdown,
  onClick,
}: Props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const dropdownClassnames = classNames([
    styles['nav-item__dropdown'],
    dropdownOpen && styles['nav-item__dropdown--visible'],
  ]);

  if (modDropdown) {
    return (
      <li className={classNames([styles['nav-item'], styles['nav-item__dropdown-trigger']])}>
        <Link
          href={href}
          className={classNames([
            styles['nav-item__dropdown-trigger__link'],
            styles['nav-item__dropdown-trigger__link--large'],
          ])}
        >
          {label}
          <Icon
            size="sm"
            icon={IconChevronDown}
            className={styles['nav-item__dropdown-trigger__link__chevron']}
            title="Chevron"
          />
        </Link>
        <button
          className={classNames([
            styles['nav-item__dropdown-trigger__link'],
            styles['nav-item__dropdown-trigger__link--small'],
          ])}
          onClick={() => toggleDropdown()}
        >
          {label}
          <Icon
            size="sm"
            icon={IconChevronDown}
            className={styles['nav-item__dropdown-trigger__link__chevron']}
            title="Chevron"
          />
        </button>
        {dropdownButton && dropdownTitle && dropdownCta && (
          <span className={dropdownClassnames}>
            <Dropdown
              path={href}
              dropdownItems={dropdownItems}
              dropdownTitle={dropdownTitle}
              dropdownCta={dropdownCta}
              dropdownButton={dropdownButton}
              groups={groups}
              rentalLocations={rentalLocations}
              toggleDropdown={toggleDropdown}
            />
          </span>
        )}
      </li>
    );
  }

  if (modButton) {
    return (
      <button onClick={onClick} className={styles['nav-item']}>
        {label}
      </button>
    );
  }

  return (
    <li className={styles['nav-item']}>
      <Link href={href} className={styles['nav-item__dropdown-trigger__link']}>
        {label}
      </Link>
    </li>
  );
};

export default NavItem;
