import classNames from 'classnames';
import NextLink from 'next/link';
import { IconSpinner } from '@/assets/icons';
import Icon from '@/components/atoms/Icon';
import { Button as ButtonProps } from './types';
import styles from './Button.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = ButtonProps & React.HTMLAttributes<HTMLElement>;

const Button = ({
  label,
  variant = 'primary',
  href,
  modSmall,
  loading,
  className,
  children,
  ...props
}: Props) => {
  const buttonClassNames = classNames(
    'button',
    `button--${variant}`,
    modSmall && 'button--small',
    className,
  );

  if (href) {
    return (
      <NextLink className={buttonClassNames} href={href} {...props}>
        <span className="button__label">
          {children || label}
          {loading && <Icon icon={IconSpinner} title="Laden..." size="xs" />}
        </span>
      </NextLink>
    );
  }
  return (
    <button className={buttonClassNames} {...props}>
      <span className="button__label">
        {children || label} {loading && <Icon icon={IconSpinner} title="Laden..." size="xs" />}
      </span>
    </button>
  );
};

export default Button;
