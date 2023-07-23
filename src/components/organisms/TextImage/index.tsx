// TODO: add variant for multiple images
// Figma: https://www.figma.com/file/hBMZQRv8UQUPIzGJ4A9uWm/Scouting-Lommel?type=design&node-id=7920-1220&mode=design&t=2HYlIEH4iYdbOht6-4

import classNames from 'classnames';
import Typography from '@/components/atoms/Typography';
import { TextImage as TextImageProps } from './types';
import SLImage from '@/components/atoms/Image';
import Button from '@/components/atoms/Button';
import styles from './TextImage.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = TextImageProps & React.HTMLAttributes<HTMLElement>;

const ImageText = ({ title, content, images, variant, ctaButton, className }: Props) => {
  const textImageClassname = classNames('text-image', `text-image--${variant}`, className);

  return (
    <div className={textImageClassname}>
      <div className="text-image__image-container">
        {images && images.length > 0 && (
          <SLImage data={images[0]} loadingStrategy={'lazy'} className="text-image__image" />
        )}
      </div>
      <div className="text-image__content">
        {title && <h2>{title}</h2>}
        <Typography modNoStyle data={content} />
        {ctaButton && (
          <Button
            label={ctaButton.label}
            href={ctaButton.link}
            variant={ctaButton.variant}
            className="text-image__content__button"
          />
        )}
      </div>
    </div>
  );
};

export default ImageText;
