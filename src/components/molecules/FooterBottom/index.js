import styles from "./FooterBottom.module.scss";

const FooterBottom = ({ siteName }) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles["footer-bottom"]}>
      &copy; {siteName} - {currentYear}
    </div>
  );
};

export default FooterBottom;
