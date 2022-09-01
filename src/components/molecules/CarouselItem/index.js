import { Leader } from "./Leader";
import { Tak } from "./tak";

const CarouselItem = ({ info, id }) => {
  if (!info.Href) { // leader
    return (
      <Leader info={info} id={id}/>
    );
  }
  // tak
  return (
    <Tak info={info}/>
  );
};

export { CarouselItem };
