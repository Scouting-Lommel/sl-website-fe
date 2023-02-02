import Link from "next/link";
import classNames from "classnames";
import { useContext } from "react";
import { GeneralContext } from "@/context/GeneralContext";
import Navigation from "@/components/molecules/Navigation";
import styles from "./Header.module.scss";
import SLImage from "@/components/atoms/Image";

const Header = () => {
  const { general } = useContext(GeneralContext);
  const headerClassNames = classNames([styles["header"], "sl-layout"]);

  return (
    <header className={headerClassNames}>
      <Link href="/" className={styles["header__link"]}>
        <SLImage
          data={general.logo.data.attributes}
          className={styles["header__link__logo"]}
        />
      </Link>
      <Navigation navItems={general.mainNavigation} />
    </header>
  );
};

export { Header };
