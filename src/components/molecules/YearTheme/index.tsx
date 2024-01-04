import classNames from 'classnames';
import SLImage from '@/components/atoms/Image';
import { YearTheme as YearThemeProps } from './types';
// @ts-ignore
import styles from './YearTheme.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = YearThemeProps & React.HTMLAttributes<HTMLElement>;

const YearTheme = ({ image, className }: Props) => {
  const yearThemeClassnames = classNames('year-theme', className);

  return (
    <div className={yearThemeClassnames}>
      <SLImage data={image} className="year-theme__image" loadingStrategy="lazy" />
    </div>
  );
};

export default YearTheme;
