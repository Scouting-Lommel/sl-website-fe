import cn from 'classnames';
import { StylesheetLink } from '@/types/StyleSheetLink';
import styles from './Banner.css';
import { Banner as BannerProps } from './types';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

const Banner = ({ variant, children }: BannerProps): JSX.Element => {
  const bannerClassName = cn('banner', `banner--${variant}`);

  return <div className={bannerClassName}>{children}</div>;
};

export default Banner;
