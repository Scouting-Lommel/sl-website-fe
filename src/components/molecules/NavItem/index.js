import classNames from "classnames";
import Link from "next/link";
import PropTypes from "prop-types";
import Dropdown from "@/components/molecules/Dropdown";
import styles from "./NavItem.module.scss";

const NavItem = ({
  label,
  href,
  dropdownItems,
  onClick,
  modButton,
  modDropdown,
}) => {
  if (modDropdown) {
    return (
      <li
        className={classNames([
          styles["nav-item"],
          styles["nav-item__dropdown-trigger"],
        ])}
      >
        <Link href={href}>{label}</Link>
        <span className={styles["nav-item__dropdown"]}>
          <Dropdown path={href} dropdownItems={dropdownItems} />
        </span>
      </li>
    );
  }

  if (modButton) {
    return (
      <button onClick={onClick} className={styles["nav-item"]}>
        {label}
      </button>
    );
  }

  return <NavLink href={href} label={label} />;
};

const NavLink = ({ href, label }) => {
  return (
    <li className={styles["nav-item"]}>
      <Link href={href}>{label}</Link>
    </li>
  );
};

NavItem.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  dropdownItems: PropTypes.array,
  onClick: PropTypes.func,
  modButton: PropTypes.bool,
  modDropdown: PropTypes.bool,
};

NavLink.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default NavItem;
