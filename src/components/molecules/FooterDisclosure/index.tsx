import { StylesheetLink } from '@/types/StyleSheetLink';
import styles from './FooterDisclosure.css';
import { FooterDisclosure as FooterDisclosureProps } from './types';

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
