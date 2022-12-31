import Carousel from "@/components/organisms/Carousel";

const CarouselBlock = ({ title, groups, blockProperties }) => {
  return (
    <section>
      <Carousel data={groups} />
    </section>
  );
};

export default CarouselBlock;
