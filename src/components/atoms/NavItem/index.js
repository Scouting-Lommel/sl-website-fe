import Link from "next/link";
import PropTypes from "prop-types";
import styles from "./NavItem.module.scss";

const NavItem = ({ label, href, onClick, modButton }) => {
  if (modButton) {
    return (
      <button onClick={onClick} className={styles["nav-item"]}>
        {label}
      </button>
    );
  }

  return (
    <li className={styles["nav-item"]}>
      <Link href={href}>{label}</Link>
    </li>
  );
};

NavItem.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  modButton: PropTypes.bool,
};

export default NavItem;
