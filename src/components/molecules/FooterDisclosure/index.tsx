import type { JSX } from 'react';
import { StylesheetLink } from '@/types/StyleSheetLink';
import { FooterDisclosure as FooterDisclosureProps } from './types';
import { RingtailLogo } from '@/components/atoms/RingtailLogo';
import styles from './FooterDisclosure.css';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

const FooterDisclosure = ({ siteName }: FooterDisclosureProps): JSX.Element => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-disclosure">
      <div className="footer-disclosure__copyright">
        &copy; {siteName} 2023-{currentYear}
      </div>
      <a href="https://ringtail.dev" target="_blank" className="footer-disclosure__author">
        Website door
        <RingtailLogo className="footer-disclosure__author__logo" />
        ringtail.dev
      </a>
    </div>
  );
};

export default FooterDisclosure;
