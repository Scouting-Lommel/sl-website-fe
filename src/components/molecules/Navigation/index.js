import Link from "next/link";
import { useAuthContext, logout } from "@/lib/api/security/security";
import styles from "./Navigation.module.scss";

const Navigation = ({ navItems }) => {
  const [auth] = useAuthContext();

  return (
    <nav className={styles["navigation"]}>
      <ul className={styles["navigation__list"]}>
        {navItems.map((navItem, i) => {
          return (
            <li
              key={`nav-item-${i}`}
              className={styles["navigation__list__item"]}
            >
              <Link href={navItem.page || navItem.link}>{navItem.label}</Link>
            </li>
          );
        })}
      </ul>
      {!auth.loggedIn && (
        <Link href="/login" className={styles["navigation__list__item"]}>
          Inloggen
        </Link>
      )}
      {auth.loggedIn && (
        <button
          onClick={() => logout()}
          className={styles["navigation__list__item"]}
        >
          Uitloggen
        </button>
      )}
    </nav>
  );
};

export default Navigation;
