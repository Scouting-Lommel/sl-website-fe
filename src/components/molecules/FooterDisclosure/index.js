import styles from './FooterDisclosure.module.scss';

const FooterDisclosure = ({ siteName }) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles['footer-disclosure']}>
      &copy; {siteName} - {currentYear}
    </div>
  );
};

export default FooterDisclosure;
