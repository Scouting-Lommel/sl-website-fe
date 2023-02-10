import PropTypes from "prop-types";
import Link from "next/link";
import styles from "./Dropdown.module.scss";

const Dropdown = ({ path, dropdownItems }) => {
  return (
    <span className={styles["dropdown"]}>
      <ul className={styles["dropdown__content"]}>
        {dropdownItems.map((item, i) => {
          return (
            <Link
              key={`dropdown-${path}-${i}`}
              href={`${path}/${item.page.replace(new RegExp("_", "g"), "-")}`}
            >
              {item.label}
            </Link>
          );
        })}
      </ul>
    </span>
  );
};

Dropdown.propTypes = {
  path: PropTypes.string,
  dropdownItems: PropTypes.array.isRequired,
};

export default Dropdown;
