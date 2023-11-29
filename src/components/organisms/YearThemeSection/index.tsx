import Typography from '@/components/atoms/Typography';
import { YearThemeSection as YearThemeSectionProps } from './types';
import YearTheme from '@/components/molecules/YearTheme';
import styles from './YearThemeSection.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = YearThemeSectionProps & React.HTMLAttributes<HTMLElement>;

const YearThemeSection = ({ yearTheme }: Props) => {
  return (
    <div className="year-theme-section">
      <div className="year-theme-section__content">
        <h2 className="year-theme-section__content__title t-headline-1">{yearTheme.title}</h2>
        <Typography data={yearTheme.description} />
      </div>
      <YearTheme className="year-theme-section__image" image={yearTheme.image.data.attributes} />
    </div>
  );
};

export default YearThemeSection;
