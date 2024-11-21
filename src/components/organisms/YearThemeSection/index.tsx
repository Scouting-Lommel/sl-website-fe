import { useTranslations } from 'next-intl';
import { StylesheetLink } from '@/types/StyleSheetLink';
import Button from '@/components/atoms/Button';
import Typography from '@/components/atoms/Typography';
import YearTheme from '@/components/molecules/YearTheme';
import { YearThemeSection as YearThemeSectionProps } from './types';
import styles from './YearThemeSection.css';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = YearThemeSectionProps & React.HTMLAttributes<HTMLElement>;

const YearThemeSection = ({ yearTheme }: Props) => {
  const t = useTranslations('common');

  return (
    <div className="year-theme-section">
      <div className="year-theme-section__content">
        <h2 className="year-theme-section__content__title t-headline-1">{yearTheme.title}</h2>
        <Typography data={yearTheme.description} />
        {yearTheme.link && (
          <Button
            label={t('moreInformation')}
            variant="light"
            href={yearTheme.link}
            className="year-theme-section__content__button"
          />
        )}
      </div>
      <YearTheme className="year-theme-section__image" image={yearTheme.image.data.attributes} />
    </div>
  );
};

export default YearThemeSection;
