import { Banner as BannerProps } from './types';
import styles from './Banner.css';
import classNames from 'classnames';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = BannerProps & React.HTMLAttributes<HTMLElement>;

const Banner = ({ variant, children }: Props) => {
  const bannerClassName = classNames('banner', `banner--${variant}`);

  return <div className={bannerClassName}>{children}</div>;
};

export default Banner;
