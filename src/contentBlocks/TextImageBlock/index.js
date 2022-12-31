import TextImage from "@/components/organisms/TextImage";

const ImageTextBlock = ({
  title,
  content,
  images,
  ctaButton,
  blockProperties,
}) => {
  return (
    <section>
      <TextImage
        title={title}
        content={content}
        images={images}
        ctaButton={ctaButton}
      />
    </section>
  );
};

export default ImageTextBlock;
