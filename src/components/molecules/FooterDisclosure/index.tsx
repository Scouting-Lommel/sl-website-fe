import { FooterDisclosure as FooterDisclosureProps } from './types';
// @ts-ignore
import styles from './FooterDisclosure.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = FooterDisclosureProps & React.HTMLAttributes<HTMLElement>;

const FooterDisclosure = ({ siteName }: Props) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-disclosure">
      &copy; {siteName} - {currentYear}
    </div>
  );
};

export default FooterDisclosure;
