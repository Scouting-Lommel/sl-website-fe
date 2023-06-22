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
        <h2>{title}</h2>
        <Carousel data={groups} />
      </section>
    </BlockContainer>
  );
};

export default GroupsBlock;
