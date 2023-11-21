import BlockContainer from '@/components/atoms/BlockContainer';
import Typography from '@/components/atoms/Typography';
import FAQ from '@/components/organisms/FAQ';
import { FaqBlock as TextImageBlockProps } from './types';

type Props = TextImageBlockProps & React.HTMLAttributes<HTMLElement>;

const FaqBlock = ({ title, bottomText, faqItems, blockProperties }: Props) => {
  return (
    <BlockContainer
      variant={blockProperties?.variant}
      orientation={blockProperties?.orientation}
      slug={blockProperties?.slug}
    >
      <FAQ title={title} faqItems={faqItems.data} bottomText={bottomText} className="sl-layout" />
    </BlockContainer>
  );
};

export default FaqBlock;
