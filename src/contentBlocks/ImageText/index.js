import ImageText from "@/components/organisms/ImageText";

const ImageTextBlock = ({ ImageLeftAligned, Title, Content, Image }) => {
  const data = { ImageLeftAligned, Title, Content, Image };

  return <ImageText info={data} />;
};

export default ImageTextBlock;
