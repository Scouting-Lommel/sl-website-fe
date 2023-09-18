import BlockContainer from '@/components/atoms/BlockContainer';
import Carousel from '@/components/organisms/Carousel';
import { GroupsBlock as GroupsBlockProps } from './types';

type Props = GroupsBlockProps & React.HTMLAttributes<HTMLElement>;

const GroupsBlock = ({ title, groups, cta, blockProperties }: Props) => {
  return (
    <BlockContainer
      variant={blockProperties.variant}
      orientation={blockProperties.orientation}
      slug={blockProperties.slug}
      cta={cta}
    >
      <section className="sl-layout">
        <h2 className="t-headline-2 t-align-center">{title}</h2>
        <Carousel groups={groups} />
      </section>
    </BlockContainer>
  );
};

export default GroupsBlock;
