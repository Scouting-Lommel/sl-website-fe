import BlockContainer from '@/components/atoms/BlockContainer';
import Title from '@/components/atoms/Title';
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
        <Title variant="h2" title={title} />
        <Carousel data={groups} />
      </section>
    </BlockContainer>
  );
};

export default GroupsBlock;
