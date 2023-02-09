import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./BlockContainer.module.scss";

const BlockContainer = ({ variant, orientation, slug, children }) => {
  const containerClassnames = classNames([
    styles["block-container"],
    styles[`block-container--${variant}`],
    styles[`block-container--${orientation}`],
  ]);

  return (
    <section id={slug} className={containerClassnames}>
      <div className={styles["block-container__content"]}>{children}</div>
    </section>
  );
};

BlockContainer.propTypes = {
  variant: PropTypes.oneOf(["light", "dark"]),
  orientation: PropTypes.oneOf(["default", "reversed"]),
  slug: PropTypes.string,
};

BlockContainer.defaultProps = {
  variant: "light",
  orientation: "default",
};

export default BlockContainer;
