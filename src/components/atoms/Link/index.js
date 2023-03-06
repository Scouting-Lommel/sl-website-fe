import classNames from 'classnames';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import styles from './Link.module.scss';

const SLLink = ({ label, href, variant, modExternal, children, className }) => {
  const linkClassnames = classNames([styles['link'], styles[`link--${variant}`], className]);

  if (modExternal) {
    <a href={href} className={linkClassnames}>
      {children || label}
    </a>;
  }
  return (
    <NextLink href={href} className={linkClassnames}>
      {children || label}
    </NextLink>
  );
};

SLLink.propTypes = {
  label: PropTypes.string,
  href: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['link1', 'link2', 'link3']),
  modExternal: PropTypes.bool,
};

SLLink.defaultProps = {
  variant: 'link1',
  modExternal: false,
};

export default SLLink;
