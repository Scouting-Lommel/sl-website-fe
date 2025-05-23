import cn from 'classnames';
import { StylesheetLink } from '@/types/StyleSheetLink';
import SLImage from '@/components/atoms/Image';
import { YearTheme as YearThemeProps } from './types';
import styles from './YearTheme.css';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

const YearTheme = ({ href, image, className }: YearThemeProps): JSX.Element => {
  const yearThemeClassnames = cn('year-theme', className);

  return (
    <div className={yearThemeClassnames}>
      {href ? (
        <a href={href}>
          <SLImage data={image} className="year-theme__image" loadingStrategy="lazy" />
        </a>
      ) : (
        <SLImage data={image} className="year-theme__image" loadingStrategy="lazy" />
      )}
    </div>
  );
};

export default YearTheme;
