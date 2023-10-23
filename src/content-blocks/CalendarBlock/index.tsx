import BlockContainer from '@/components/atoms/BlockContainer';
import { CalendarBlock as CalendarBlockProps } from './types';
import Calendar from '@/components/atoms/Calendar';

type Props = CalendarBlockProps & React.HTMLAttributes<HTMLElement>;

const GroupsBlock = ({ title, calendarEvents, cta, blockProperties }: Props) => {
  return (
    <BlockContainer
      variant={blockProperties.variant}
      orientation={blockProperties.orientation}
      slug={blockProperties.slug}
      cta={cta}
    >
      <section className="sl-layout">
        <h2 className="t-headline-2 t-align-center">{title}</h2>
        <Calendar events={calendarEvents} />
      </section>
    </BlockContainer>
  );
};

export default GroupsBlock;
