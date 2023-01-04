import Carousel from "@/components/organisms/Carousel";

const GroupsBlock = ({ title, groups, blockProperties }) => {
  return (
    <section>
      <Carousel data={groups} />
    </section>
  );
};

export default GroupsBlock;
