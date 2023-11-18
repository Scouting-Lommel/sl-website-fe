import Typography from '@/components/atoms/Typography';
import { YearThemeSection as YearThemeSectionProps } from './types';
import YearTheme from '@/components/molecules/YearTheme';

type Props = YearThemeSectionProps & React.HTMLAttributes<HTMLElement>;

const YearThemeSection = ({ yearTheme }: Props) => {
  return (
    <div>
      <div>
        <h2 className="t-headline-2 t-align-center">{yearTheme.title}</h2>
        <Typography data={yearTheme.description} />
      </div>
      <YearTheme image={yearTheme.image.data.attributes} />
    </div>
  );
};

export default YearThemeSection;
