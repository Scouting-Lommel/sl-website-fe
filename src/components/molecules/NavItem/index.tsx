import classNames from 'classnames';
import Link from 'next/link';
import { useState } from 'react';
import { IconChevronDown } from '@/assets/icons';
import Icon from '@/components/atoms/Icon';
import Dropdown from '@/components/molecules/Dropdown';
import { NavItem as NavItemProps } from './types';
import styles from './NavItem.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

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

  const dropdownClassnames = classNames(
    'nav-item__dropdown',
    dropdownOpen && 'nav-item__dropdown--visible',
  );

  if (modDropdown) {
    return (
      <li className="nav-item nav-item__dropdown-trigger">
        <Link
          href={href}
          className="nav-item__dropdown-trigger__link nav-item__dropdown-trigger__link--large"
        >
          {label}
          <Icon
            size="sm"
            icon={IconChevronDown}
            className="nav-item__dropdown-trigger__link__chevron"
            title="Chevron"
          />
        </Link>
        <button
          className="nav-item__dropdown-trigger__link nav-item__dropdown-trigger__link--small"
          onClick={() => toggleDropdown()}
        >
          {label}
          <Icon
            size="sm"
            icon={IconChevronDown}
            className="nav-item__dropdown-trigger__link__chevron"
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
      <button onClick={onClick} className="nav-item">
        {label}
      </button>
    );
  }

  return (
    <li className="nav-item">
      <Link href={href} className="nav-item__dropdown-trigger__link">
        {label}
      </Link>
    </li>
  );
};

export default NavItem;
