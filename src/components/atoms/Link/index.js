import classNames from 'classnames';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import styles from './Link.module.scss';

const SLLink = ({ label, href, variant, children, className }) => {
  const linkClassnames = classNames([styles['link'], styles[`link--${variant}`], className]);

  return (
    <NextLink href={href} className={linkClassnames}>
      {children || label}
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
