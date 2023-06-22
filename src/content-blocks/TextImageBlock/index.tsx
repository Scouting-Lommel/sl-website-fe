import BlockContainer from '@/components/atoms/BlockContainer';
import TextImage from '@/components/organisms/TextImage';
import { TextImageBlock as TextImageBlockProps } from './types';

type Props = TextImageBlockProps & React.HTMLAttributes<HTMLElement>;

const ImageTextBlock = ({ title, content, images, ctaButton, blockProperties }: Props) => {
  return (
    <BlockContainer
      variant={blockProperties?.variant}
      orientation={blockProperties?.orientation}
      slug={blockProperties?.slug}
    >
      <section className="sl-layout">
        <TextImage
          title={title}
          content={content}
          images={images?.data?.attributes}
          ctaButton={ctaButton}
        />
      </section>
    </BlockContainer>
  );
};

export default ImageTextBlock;
