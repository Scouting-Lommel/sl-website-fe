import { Leader } from '@/components/molecules/CarouselItem/Leader';
import { Tak } from '@/components/molecules/CarouselItem/Tak';

const CarouselItem = ({ info, id }) => {
  if (!info.Href) {
    // leader
    return <Leader info={info} id={id} />;
  }
  // tak
  return <Tak info={info} />;
};

export { CarouselItem };
