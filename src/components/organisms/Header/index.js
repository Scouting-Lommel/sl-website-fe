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
      <div className={styles['header']}>
        <header className="sl-layout">
          <div className={styles['header__content']}>
            <Link href="/" className={styles['header__link']}>
              <SLImage data={general.generalData.data.attributes.logo.data.attributes} />
            </Link>
            <Navigation navItems={general.generalData.data.attributes.mainNavigation} />
          </div>
        </header>
      </div>
    </div>
  );
};

export { Header };
