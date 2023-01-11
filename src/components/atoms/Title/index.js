import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Title.module.scss";

const Title = ({ title, variant, style, tagName, modLight, className }) => {
  const titleStyle = style ? style : variant;
  const TagName = tagName ?? variant;

  const titleClassNames = classNames([
    styles["title"],
    styles[`title--${titleStyle}`],
    modLight && styles["title--light"],
    className,
  ]);

  return <TagName className={titleClassNames}>{title}</TagName>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["h1", "h1-alt", "h2", "h3"]),
  style: PropTypes.oneOf(["h1", "h1-alt", "h2", "h3"]),
  modLight: PropTypes.bool,
};

Title.defaultProps = {
  variant: "h1",
};

export default Title;
