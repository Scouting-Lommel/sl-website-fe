import BlockContainer from '@/components/atoms/BlockContainer';
import { LeadersBLock as LeadersBlockProps } from './type';
import Leaders from '@/components/organisms/Leaders';

type Props = LeadersBlockProps & React.HTMLAttributes<HTMLElement>;

const LeadersBlock = ({ title, leaders, cta, blockProperties }: Props) => {
  return (
    <BlockContainer
      variant={blockProperties.variant}
      orientation={blockProperties.orientation}
      slug={blockProperties.slug}
      cta={cta}
    >
      <div className="sl-layout">
        <h2 className="t-headline-2 t-align-center">{title}</h2>
        <Leaders leaders={leaders.data} />
      </div>
    </BlockContainer>
  );
};

export default LeadersBlock;
