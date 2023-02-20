import Link from 'next/link';
import { useContext, useState } from 'react';
import classNames from 'classnames';
import { GeneralContext } from '@/context/GeneralContext';
import { IconClose, IconMenu } from '@/assets/icons';
import Icon from '@/components/atoms/Icon';
import Navigation from '@/components/molecules/Navigation';
import SLImage from '@/components/atoms/Image';
import styles from './Header.module.scss';

const Header = () => {
  const { general } = useContext(GeneralContext);
  const [navVisible, setNavVisible] = useState(false);
  const navClassnames = classNames(
    styles['header__nav'],
    navVisible ? styles['header__nav--visible'] : styles['header__nav--invisible'],
  );

  const triggerNav = () => {
    setNavVisible(!navVisible);
  };

  return (
    <div className={styles['header__wrapper']}>
      <div className={styles['header']}>
        <header className="sl-layout">
          <div className={styles['header__content']}>
            <Link href="/" className={styles['header__link']}>
              <SLImage data={general.generalData.data.attributes.logo.data.attributes} />
            </Link>
            <div className={navClassnames}>
              <Navigation navItems={general.generalData.data.attributes.mainNavigation} />
            </div>
            <button className={styles['header__trigger']} onClick={() => triggerNav()}>
              {navVisible ? (
                <Icon icon={IconClose} className={styles['header__trigger__icon']} />
              ) : (
                <Icon icon={IconMenu} className={styles['header__trigger__icon']} />
              )}
            </button>
          </div>
        </header>
      </div>
    </div>
  );
};

export { Header };
