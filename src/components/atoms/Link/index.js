import classNames from 'classnames';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import styles from './Link.module.scss';

const SLLink = ({ href, variant, children }) => {
  const linkClassnames = classNames([styles['link'], styles[`link--${variant}`]]);

  return (
    <NextLink href={href} className={linkClassnames}>
      {children}
    </NextLink>
  );
};

SLLink.propTypes = {
  href: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['link1', 'link2', 'link3']),
};

SLLink.defaultProps = {
  variant: 'link1',
};

export default SLLink;
