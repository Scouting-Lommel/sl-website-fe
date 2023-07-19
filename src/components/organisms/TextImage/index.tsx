import Typography from '@/components/atoms/Typography';
import { TextImage as TextImageProps } from './types';
import SLImage from '@/components/atoms/Image';
import Button from '@/components/atoms/Button';

type Props = TextImageProps & React.HTMLAttributes<HTMLElement>;

const ImageText = ({ title, content, images, ctaButton }: Props) => {
  return (
    <div>
      {images &&
        images.length > 0 &&
        images.map((image, i) => {
          return <SLImage key={i} data={image} loadingStrategy={'lazy'} />;
        })}
      <h2>{title}</h2>
      <Typography modNoStyle data={content} />
      {ctaButton && (
        <Button
          label={ctaButton.label}
          href={ctaButton.link}
          variant={ctaButton.variant}
          modSmall
        />
      )}
    </div>
  );
};

export default ImageText;
