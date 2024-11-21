import classNames from 'classnames';
import NextLink from 'next/link';
import { StylesheetLink } from '@/types/StyleSheetLink';
import styles from './Link.css';
import { Link as LinkProps } from './types';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

const SLLink = ({ href, variant, children, className }: LinkProps): JSX.Element => {
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
