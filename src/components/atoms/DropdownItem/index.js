import PropTypes from "prop-types";
import Link from "next/link";
import RichText from "@/components/atoms/RichtText";
import styles from "./DropdownItem.module.scss";

const DropdownItem = ({ title, description, href }) => {
  return (
    <li>
      <Link href={href} className={styles["dropdown-item"]}>
        <div className={styles["dropdown-item__title"]}>{title}</div>
        <RichText
          data={description}
          className={styles["dropdown-item__description"]}
        />
      </Link>
    </li>
  );
};

DropdownItem.proptypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  href: PropTypes.string,
};

export default DropdownItem;
