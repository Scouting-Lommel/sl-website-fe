// TODO: Rewrite entire navigation to be more accessible

'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { IconClose, IconMenu } from '@/assets/icons';
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
                <Icon icon={IconClose} size="lg" title="Close menu" />
              ) : (
                <Icon icon={IconMenu} size="lg" title="Menu" />
              )}
            </button>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
