import classNames from 'classnames';
import Typography from '@/components/atoms/Typography';
import SLImage from '@/components/atoms/Image';
import Button from '@/components/atoms/Button';
import { TextImage as TextImageProps } from './types';
import styles from './TextImage.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = TextImageProps & React.HTMLAttributes<HTMLElement>;

const ImageText = ({ title, content, images, variant, ctaButton, className }: Props) => {
  const textImageClassnames = classNames(
    'text-image',
    images && images?.length > 0 && `text-image--${variant} text-image--has-images`,
    images && images?.length < 1 && 'text-image--has-no-images',
    images && images?.length === 2 && 'text-image--multiple-images text-image--multiple-images--2',
    images && images?.length === 3 && 'text-image--multiple-images text-image--multiple-images--3',
    className,
  );

  return (
    <div className={textImageClassnames}>
      {images && images.length > 0 && (
        <div className="text-image__image-container">
          {images.map((image, i) => {
            return (
              <SLImage
                key={i}
                data={image}
                loadingStrategy={'lazy'}
                className="text-image__image"
                modMaximisable
              />
            );
          })}
        </div>
      )}
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
