import { Gallery as GalleryProps } from './types';
import styles from './Gallery.css';
import SLImage from '@/components/atoms/Image';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = GalleryProps & React.HTMLAttributes<HTMLElement>;

const Gallery = ({ title, initialItems, images }: Props) => {
  return (
    <div>
      <h2 className="t-headline-2 t-align-center">{title}</h2>
      <div className="gallery--imagecontainer">
        {[...Array(initialItems)].map((_, i) => {
          if (images.data.length > i) {
            return (
              <SLImage
                key={i}
                data={images.data[i].attributes}
                loadingStrategy={'lazy'}
                className="Gallery--image"
              />
            );
          }
          return <></>;
        })}
      </div>
    </div>
  );
};

export default Gallery;
