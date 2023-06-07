import { FooterDisclosure as FooterDisclosureProps } from './types';
import styles from './FooterDisclosure.module.scss';

type Props = FooterDisclosureProps & React.HTMLAttributes<HTMLElement>;

const FooterDisclosure = ({ siteName }: Props) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles['footer-disclosure']}>
      &copy; {siteName} - {currentYear}
    </div>
  );
};

export default FooterDisclosure;
