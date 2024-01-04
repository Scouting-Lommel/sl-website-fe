import classNames from 'classnames';
import NextLink from 'next/link';
import { Link as LinkProps } from './types';
// @ts-ignore
import styles from './Link.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = LinkProps & React.HTMLAttributes<HTMLElement>;

const SLLink = ({ href, variant, children, className }: Props) => {
  const linkClassnames = classNames('link', `link--${variant}`, className);

  let LinkComponent: typeof NextLink | 'a' = NextLink;
  if (typeof href === 'string' && href.startsWith('#')) {
    LinkComponent = 'a';
  }
  if (typeof href === 'string' && href.startsWith('https://')) {
    LinkComponent = 'a';
  }

  return (
    <LinkComponent href={href as string} className={linkClassnames}>
      {children}
    </LinkComponent>
  );
};

export default SLLink;
