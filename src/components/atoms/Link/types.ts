import { LinkProps as NextLinkProps } from 'next/link';

export type Link = {
  variant: 'link1' | 'link2';
} & NextLinkProps;
