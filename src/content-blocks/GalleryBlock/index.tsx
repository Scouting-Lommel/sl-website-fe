import BlockContainer from '@/components/atoms/BlockContainer';
import { GalleryBlock as GalleryBlockProps } from './types';
import Gallery from '@/components/organisms/Gallery';

type Props = GalleryBlockProps & React.HTMLAttributes<HTMLElement>;

const GalleryBlock = ({ title, initialItems, images, blockProperties, cta }: Props) => {
  return (
    <BlockContainer
      variant={blockProperties?.variant}
      orientation={blockProperties?.orientation}
      slug={blockProperties?.slug}
      cta={cta}
    >
      <section className="sl-layout">
        <Gallery title={title} initialItems={initialItems} images={images} />
      </section>
    </BlockContainer>
  );
};

export default GalleryBlock;
