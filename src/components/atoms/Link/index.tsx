import cn from 'classnames';
import NextLink from 'next/link';
import { StylesheetLink } from '@/types/StyleSheetLink';
import { Link as LinkProps } from './types';
import styles from './Link.css';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

const SLLink = ({ href, variant, children, className }: LinkProps): JSX.Element => {
  const linkClassnames = cn('link', `link--${variant}`, className);

  let LinkComponent: typeof NextLink | 'a' = NextLink;
  if (typeof href === 'string' && (href.startsWith('#') || href.startsWith('https://'))) {
    LinkComponent = 'a';
  }

  return (
    <LinkComponent href={href as string} className={linkClassnames}>
      {children}
    </LinkComponent>
  );
};

export default SLLink;
