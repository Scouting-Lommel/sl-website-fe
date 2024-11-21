import classNames from 'classnames';
import { StylesheetLink } from '@/types/StyleSheetLink';
import SLImage from '@/components/atoms/Image';
import { YearTheme as YearThemeProps } from './types';
import styles from './YearTheme.css';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

const YearTheme = ({ image, className }: YearThemeProps): JSX.Element => {
  const yearThemeClassnames = classNames('year-theme', className);

  return (
    <div className={yearThemeClassnames}>
      <SLImage data={image} className="year-theme__image" loadingStrategy="lazy" />
    </div>
  );
};

export default YearTheme;
