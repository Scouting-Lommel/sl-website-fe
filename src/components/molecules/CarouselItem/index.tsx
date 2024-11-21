import { StylesheetLink } from '@/types/StyleSheetLink';
import SLImage from '@/components/atoms/Image';
import Typography from '@/components/atoms/Typography';
import { CarouselItem as CarouselItemProps } from './types';
import styles from './CarouselItem.css';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

const CarouselItem = ({ logo, name, slug }: CarouselItemProps): JSX.Element => {
  return (
    <div className="embla__slide">
      <a className="embla__slide__card" href={'/takken/' + slug}>
        <div className="embla__image__container">
          <SLImage
            data={logo.data?.attributes}
            loadingStrategy="lazy"
            className="embla__slide__img"
          />
        </div>
        <div className="embla__slide__number t-headline-2">
          <Typography>{name}</Typography>
        </div>
      </a>
    </div>
  );
};

export default CarouselItem;
