import { CarouselItem as CarouselItemProps } from './types';
import styles from './CarouselItem.css';
import SLImage from '@/components/atoms/Image';
import Typography from '@/components/atoms/Typography';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = CarouselItemProps & React.HTMLAttributes<HTMLElement>;

const CarouselItem = ({ logo, name, slug }: Props) => {
  // console.log(logo.data?.attributes.formats);
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
        <div className="embla__slide__number">
          <Typography>{name}</Typography>
        </div>
      </a>
    </div>
  );
};

export default CarouselItem;
