import { useContext } from "react";
import { GeneralContext } from "@/context/GeneralContext";
import FooterHead from "@/components/molecules/FooterHead";
import FooterBottom from "@/components/molecules/FooterBottom";
import FooterInfo from "@/components/molecules/FooterInfo";
import styles from "./Footer.module.scss";
import classNames from "classnames";

const Footer = () => {
  const { general } = useContext(GeneralContext);
  const footerClassNames = classNames([styles["footer"], "sl-layout"]);

  return (
    <footer className={footerClassNames}>
      <FooterHead
        siteName={general?.siteName}
        vatNumber={general?.vatNumber}
        groupNumber={general?.groupNumber}
      />
      <FooterInfo
        address={general?.address}
        contactItems={general?.contactItems}
        footerNavigation={general?.footerNavigation}
      />
      <FooterBottom siteName={general?.siteName} />
    </footer>
  );
};

export { Footer };
