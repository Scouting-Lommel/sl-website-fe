import ReactMarkdown from "react-markdown";
import Link from "@/components/atoms/Link";
import Title from "@/components/atoms/Title";
import styles from "./FooterInfo.module.scss";

const InfoCol = ({ title, address, links }) => {
  return (
    <div className={styles["info-col"]}>
      <Title title={title} variant="h3" className={styles["info-col__title"]} />

      {address ? (
        <div className={styles["info-col__content"]}>
          <ReactMarkdown>{address}</ReactMarkdown>
        </div>
      ) : (
        links?.map((item, i) => {
          return (
            <Link key={i} href={item.link || "#"}>
              <span className={styles["info-col__content"]}>{item.label}</span>
            </Link>
          );
        })
      )}
    </div>
  );
};

const FooterInfo = ({ address, contactItems, footerNavigation }) => {
  return (
    <div className={styles["footer-info"]}>
      <div className={styles["footer-info__section"]}>
        <InfoCol title="Adres" address={address} />
        <InfoCol title="Contact" links={contactItems} />
      </div>
      <div className={styles["footer-info__section"]}>
        {footerNavigation.map((el, i) => {
          return <InfoCol key={i} title={el.title} links={el.navItems} />;
        })}
      </div>
    </div>
  );
};

export default FooterInfo;
