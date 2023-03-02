import classNames from 'classnames';
import SLImage from '@/components/atoms/Image';
import styles from './YearTheme.module.scss';

const YearTheme = ({ yearTheme, className }) => {
  const yearThemeClassnames = classNames([styles['year-theme'], className]);

  return (
    <div className={yearThemeClassnames}>
      <SLImage data={yearTheme.image.data.attributes} className={styles['year-theme__image']} />
    </div>
  );
};

export default YearTheme;
