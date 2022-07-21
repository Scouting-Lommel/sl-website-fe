import Carousel from "@/components/organisms/Carousel";

const CarouselBlock = ({
  Items,
  Title,
  IsLeaderShowcase,
  IsGroupsShowcase,
}) => {
  const data = { Items, Title, IsLeaderShowcase, IsGroupsShowcase };

  return <Carousel info={data} />;
};

export default CarouselBlock;
