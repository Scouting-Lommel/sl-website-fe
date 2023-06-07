import FooterHead from '@/components/molecules/FooterHead';
import FooterDisclosure from '@/components/molecules/FooterDisclosure';
import FooterDoormat from '@/components/molecules/FooterDoormat';
import styles from './Footer.module.scss';

const Footer = ({ siteName, vatNumber, groupNumber, address, contactItems, footerNavigation }) => {
  return (
    <footer className={styles['footer']}>
      <div className="sl-layout">
        <FooterHead siteName={siteName} vatNumber={vatNumber} groupNumber={groupNumber} />
        <FooterDoormat
          address={address}
          contactItems={contactItems}
          footerNavigation={footerNavigation}
        />
        <FooterDisclosure siteName={siteName} />
      </div>
    </footer>
  );
};

export { Footer };
