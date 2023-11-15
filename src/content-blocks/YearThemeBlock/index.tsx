import BlockContainer from '@/components/atoms/BlockContainer';
import { YearThemeBlock as YearThemeBlockProps } from './types';

type Props = YearThemeBlockProps & React.HTMLAttributes<HTMLElement>;

const YearThemeBlock = ({ title, blockProperties }: Props) => {
  return (
    <BlockContainer
      variant={blockProperties?.variant}
      orientation={blockProperties?.orientation}
      slug={blockProperties?.slug}
      modMargin
    >
      <div className="sl-layout">
        <h2>{title}</h2>
      </div>
    </BlockContainer>
  );
};

export default YearThemeBlock;
