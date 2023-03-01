import PropTypes from 'prop-types';
import classNames from 'classnames';
import NextLink from 'next/link';
import styles from './Button.module.scss';

const Button = ({
  label,
  variant,
  href,
  type,
  modLink,
  modSmall,
  className,
  children,
  ...props
}) => {
  const buttonClassNames = classNames([
    styles['button'],
    styles[`button--${variant}`],
    modSmall && styles['button--small'],
    className,
  ]);

  if (modLink) {
    return (
      <NextLink className={buttonClassNames} href={href} {...props}>
        <span className={styles['button__label']}>{children || label}</span>
      </NextLink>
    );
  }
  return (
    <button className={buttonClassNames} {...props}>
      <span className={styles['button__label']}>{children || label}</span>
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'light', 'link1']),
  type: PropTypes.oneOf(['submit', 'button']),
  href: PropTypes.string,
  onClick: PropTypes.func,
  modLink: PropTypes.bool,
  modSmall: PropTypes.bool,
};

Button.defaultProps = {
  variant: 'primary',
  onClick: undefined,
  modLink: false,
};

export default Button;
