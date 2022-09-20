import { CarouselItem } from "@/components/molecules/CarouselItem";

const LeaderCarousel = ({ leaders }) => {
  return (
    <div className="flex justify-around py-4">
      {leaders.data.map((item, index) => {
        return (
          <CarouselItem
            info={item.attributes}
            key={"carItem" + index}
            id={item.id}
          />
        );
      })}
    </div>
  );
};

export { LeaderCarousel };
