import { StylesheetLink } from '@/types/StyleSheetLink';
import { FooterDisclosure as FooterDisclosureProps } from './types';
import styles from './FooterDisclosure.css';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

const FooterDisclosure = ({ siteName }: FooterDisclosureProps): JSX.Element => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-disclosure">
      &copy; {siteName} 2023-{currentYear}
    </div>
  );
};

export default FooterDisclosure;
