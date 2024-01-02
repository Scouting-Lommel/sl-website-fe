import BlockContainer from '@/components/atoms/BlockContainer';
import YearThemeSection from '@/components/organisms/YearThemeSection';
import { YearThemeBlock as YearThemeBlockProps } from './types';

type Props = YearThemeBlockProps & React.HTMLAttributes<HTMLElement>;

const YearThemeBlock = ({ title, cta, blockProperties, yearTheme }: Props) => {
  return (
    <BlockContainer
      variant={blockProperties?.variant}
      orientation={blockProperties?.orientation}
      slug={blockProperties?.slug}
      cta={cta}
    >
      <div className="sl-layout">
        <YearThemeSection yearTheme={yearTheme} />
      </div>
    </BlockContainer>
  );
};

export default YearThemeBlock;
