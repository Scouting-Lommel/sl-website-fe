import BlockContainer from '@/components/atoms/BlockContainer';
import Activities from '@/components/organisms/Activities';
import { ActivityBlock as ActivityBlockProps } from './types';

const GroupsBlock = ({
  title,
  initialItems,
  callToAction,
  blockProperties,
  activities,
}: ActivityBlockProps): JSX.Element => {
  return (
    <>
      <hr className="sl-layout" />
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
    </>
  );
};

export default GroupsBlock;
