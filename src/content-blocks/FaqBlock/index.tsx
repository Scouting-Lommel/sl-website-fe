import BlockContainer from '@/components/atoms/BlockContainer';
import { FaqBlock as TextImageBlockProps } from './types';
import FAQ from '@/components/organisms/FAQ';

type Props = TextImageBlockProps & React.HTMLAttributes<HTMLElement>;

const FaqBlock = ({ title, faqItems, blockProperties }: Props) => {
  return (
    <BlockContainer
      variant={blockProperties?.variant}
      orientation={blockProperties?.orientation}
      slug={blockProperties?.slug}
    >
      <FAQ title={title} faqItems={faqItems.data} className="sl-layout" />
    </BlockContainer>
  );
};

export default FaqBlock;
