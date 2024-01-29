import BlockContainer from '@/components/atoms/BlockContainer';
import TextImage from '@/components/organisms/TextImage';
import { TextImageBlock as TextImageBlockProps } from './types';

type Props = TextImageBlockProps & React.HTMLAttributes<HTMLElement>;

const ImageTextBlock = ({
  title,
  content,
  images,
  orientation,
  ctaButton,
  blockProperties,
}: Props) => {
  return (
    <BlockContainer
      variant={blockProperties?.variant}
      orientation={blockProperties?.orientation}
      slug={blockProperties?.slug}
      modMargin
    >
      <TextImage
        title={title}
        content={content}
        images={
          images?.data.length > 0
            ? images?.data.map((image) => {
                return image.attributes;
              })
            : undefined
        }
        ctaButton={ctaButton}
        variant={orientation}
        className="sl-layout"
      />
    </BlockContainer>
  );
};

export default ImageTextBlock;
