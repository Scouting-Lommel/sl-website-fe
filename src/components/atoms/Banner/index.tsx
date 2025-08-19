import cn from 'classnames';
import type { JSX } from 'react';
import { StylesheetLink } from '@/types/StyleSheetLink';
import { Banner as BannerProps } from './types';
import styles from './Banner.css';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

const Banner = ({ variant, children }: BannerProps): JSX.Element => {
  const bannerClassName = cn('banner', `banner--${variant}`);

  return <div className={bannerClassName}>{children}</div>;
};

export default Banner;
