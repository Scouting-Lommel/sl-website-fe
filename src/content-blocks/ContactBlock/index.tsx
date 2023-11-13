import Contact from '@/components/organisms/Contact';
import { ContactBlock as ContactBlockProps } from './types';
import BlockContainer from '@/components/atoms/BlockContainer';

type Props = ContactBlockProps & React.HTMLAttributes<HTMLElement>;

const ContactBlock = ({ title, subjectOptions, blockProperties }: Props) => {
  return (
    <BlockContainer
      variant={blockProperties.variant}
      orientation={blockProperties.orientation}
      slug={blockProperties.slug}
      modSmallPadding
    >
      <section className="sl-layout">
        <Contact title={title} subjectOptions={subjectOptions} />
      </section>
    </BlockContainer>
  );
};

export default ContactBlock;
