'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import Link from 'next/link';
import Icon from '@/components/atoms/Icon';
import Navigation from '@/components/molecules/Navigation';
import SLImage from '@/components/atoms/Image';
import { Header as HeaderProps } from './types';
import styles from './Header.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = HeaderProps & React.HTMLAttributes<HTMLElement>;

const Header = ({ logo, mainNavigation, groups, rentalLocations }: Props) => {
  const [navVisible, setNavVisible] = useState(false);
  const pathname = usePathname();
  const navClassnames = classNames(
    'header__nav',
    navVisible ? 'header__nav--visible' : 'header__nav--invisible',
  );

  const triggerNav = () => {
    setNavVisible(!navVisible);

    if (!navVisible) {
      document.body.setAttribute('style', 'overflow-y: hidden');
    }
    if (navVisible) {
      document.body.removeAttribute('style');
    }
  };

  useEffect(() => {
    setNavVisible(false);
    document.body.removeAttribute('style');
  }, [pathname]);

  return (
    <div className="header__wrapper">
      <div className="header">
        <header className="sl-layout">
          <div className="header__content">
            <Link href="/" className="header__link">
              <SLImage data={logo.data.attributes} loadingStrategy="lazy" />
            </Link>
            <div className={navClassnames}>
              <Navigation
                navItems={mainNavigation}
                groups={groups}
                rentalLocations={rentalLocations}
              />
            </div>
            <button className="header__trigger" onClick={() => triggerNav()}>
              {navVisible ? (
                <Icon name="close" aria-label="Close menu" size="lg" />
              ) : (
                <Icon name="menu" aria-label="Menu" size="lg" />
              )}
            </button>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
