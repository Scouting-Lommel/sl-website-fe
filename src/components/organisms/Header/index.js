import Link from 'next/link';
import { useContext } from 'react';
import { GeneralContext } from '@/context/GeneralContext';
import Navigation from '@/components/molecules/Navigation';
import SLImage from '@/components/atoms/Image';
import styles from './Header.module.scss';

const Header = () => {
  const { general } = useContext(GeneralContext);

  return (
    <div className={styles['header__wrapper']}>
      <header className="sl-layout">
        <div className={styles['header']}>
          <Link href="/" className={styles['header__link']}>
            <SLImage data={general.logo.data.attributes} />
          </Link>
          <Navigation navItems={general.mainNavigation} />
        </div>
      </header>
    </div>
  );
};

export { Header };
