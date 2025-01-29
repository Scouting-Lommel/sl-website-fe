import { LinkProps as NextLinkProps } from 'next/link';

type Override<T, U> = Omit<T, keyof U> & U;

export type Link = Override<NextLinkProps, { href?: string }> & {
  variant?: 'link1' | 'link2' | 'link3' | 'breadcrumb';
} & React.HTMLAttributes<HTMLElement>;
