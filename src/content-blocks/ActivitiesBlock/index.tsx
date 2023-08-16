import BlockContainer from '@/components/atoms/BlockContainer';
import { ActivityBlock as ActivityBlockProps } from './types';
import Activities from '@/components/organisms/Activities';

type Props = ActivityBlockProps & React.HTMLAttributes<HTMLElement>;

const GroupsBlock = ({ title, initialItems, callToAction, blockProperties, activities }: Props) => {
  return (
    <BlockContainer
      variant={blockProperties.variant}
      orientation={blockProperties.orientation}
      slug={blockProperties.slug}
      cta={callToAction}
    >
      <section className="sl-layout">
        <h2 className="t-headline-2 t-align-center">{title}</h2>
        <Activities activities={activities} initialItems={initialItems} />
      </section>
    </BlockContainer>
  );
};

export default GroupsBlock;
