import NextLink from "next/link";
import PropTypes from "prop-types";

const Link = ({ label, href }) => {
  return <NextLink href={href}>{label}</NextLink>;
};

Link.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default Link;
