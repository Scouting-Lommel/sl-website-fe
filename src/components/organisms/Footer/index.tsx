import type { JSX } from 'react';
import { StylesheetLink } from '@/types/StyleSheetLink';
import FooterDisclosure from '@/components/molecules/FooterDisclosure';
import FooterDoormat from '@/components/molecules/FooterDoormat';
import FooterHead from '@/components/molecules/FooterHead';
import { Footer as FooterProps } from './types';
import styles from './Footer.css';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

const Footer = ({
  siteName,
  vatNumber,
  groupNumber,
  address,
  contactItems,
  footerNavigation,
}: FooterProps): JSX.Element => {
  return (
    <footer className="footer">
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

export default Footer;
