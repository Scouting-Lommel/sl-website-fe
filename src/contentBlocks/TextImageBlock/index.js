import BlockContainer from "@/components/atoms/BlockContainer";
import TextImage from "@/components/organisms/TextImage";

const ImageTextBlock = ({
  title,
  content,
  images,
  ctaButton,
  blockProperties,
}) => {
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
          images={images}
          ctaButton={ctaButton}
        />
      </section>
    </BlockContainer>
  );
};

export default ImageTextBlock;
