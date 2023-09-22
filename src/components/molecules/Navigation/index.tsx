// TODO: Re-add security and authentication functionality

import NavItem from '@/components/molecules/NavItem';
import { Navigation as NavigationProps } from './types';
import styles from './Navigation.css';
import Icon from '@/components/atoms/Icon';
import { IconLock } from '@/assets/icons';
import Modal from '@/components/molecules/Modal';
import Login from '@/components/organisms/Login';
import { hasCookie, removeCookie } from '@/api/cookies';
import { useEffect, useState } from 'react';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = NavigationProps & React.HTMLAttributes<HTMLElement>;

const Navigation = ({ navItems, groups, rentalLocations }: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    setIsLoggedIn(hasCookie('leader'));
  }, [isLoggedIn]);
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
        {!isLoggedIn && (
          <li className="navigation__login">
            <Modal
              button={
                <div className="navigation__login__button">
                  Log in
                  <Icon icon={IconLock} size="md" title="loginLock" className="navigation__lock" />
                </div>
              }
              modalData={<Login />}
              cardClass="navigation__login__card"
            />
          </li>
        )}
        {isLoggedIn && (
          <li className="navigation__login">
            <div
              className="navigation__login__button"
              onClick={() => {
                removeCookie('leader');
                location.reload();
              }}
            >
              Log uit
              <Icon icon={IconLock} size="md" title="loginLock" className="navigation__lock" />
            </div>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
