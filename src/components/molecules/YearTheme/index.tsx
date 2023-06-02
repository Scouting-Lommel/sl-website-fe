import classNames from 'classnames';
import SLImage from '@/components/atoms/Image';
import { YearTheme as YearThemeProps } from './types';
import styles from './YearTheme.module.scss';

type Props = YearThemeProps & React.HTMLAttributes<HTMLElement>;

const YearTheme = ({ image, className }: Props) => {
  const yearThemeClassnames = classNames([styles['year-theme'], className]);

  return (
    <div className={yearThemeClassnames}>
      <SLImage data={image} className={styles['year-theme__image']} loadingStrategy={'lazy'} />
    </div>
  );
};

export default YearTheme;
