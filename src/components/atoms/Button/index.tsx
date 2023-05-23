import classNames from 'classnames';
import NextLink from 'next/link';
import { Button as ButtonProps } from './types';
import styles from './Button.module.scss';

type Props = ButtonProps & React.HTMLAttributes<HTMLElement>;

const Button = ({
  label,
  variant = 'primary',
  href,
  modSmall,
  className,
  children,
  ...props
}: Props) => {
  const buttonClassNames = classNames([
    styles['button'],
    styles[`button--${variant}`],
    modSmall && styles['button--small'],
    className,
  ]);

  if (href) {
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

export default Button;
