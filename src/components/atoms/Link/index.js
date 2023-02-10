import NextLink from 'next/link';
import PropTypes from 'prop-types';

const Link = ({ href, children }) => {
  return <NextLink href={href}>{children}</NextLink>;
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
};

export default Link;
