import classNames from 'classnames';
import NextLink from 'next/link';
import { Link as LinkProps } from './types';
import styles from './Link.module.scss';

type Props = LinkProps & React.HTMLAttributes<HTMLElement>;

const SLLink = ({ href, variant, children, className }: Props) => {
  const linkClassnames = classNames([styles['link'], styles[`link--${variant}`], className]);

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
