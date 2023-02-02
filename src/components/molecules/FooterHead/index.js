import Title from "@/components/atoms/Title";
import styles from "./FooterHead.module.scss";

const FooterHead = ({ siteName, vatNumber, groupNumber }) => {
  return (
    <div className={styles["footer-head"]}>
      <Title
        title={siteName}
        variant="h2"
        className={styles["footer-head__title"]}
      />
      <p className={styles["footer-head__info"]}>
        {vatNumber} • {groupNumber}
      </p>
    </div>
  );
};

export default FooterHead;
