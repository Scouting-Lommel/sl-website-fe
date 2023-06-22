import { TextImage as TextImageProps } from './types';

type Props = TextImageProps & React.HTMLAttributes<HTMLElement>;

const ImageText = ({ title, content, images, ctaButton }: Props) => {
  return <>Text Image</>;
};

export default ImageText;
