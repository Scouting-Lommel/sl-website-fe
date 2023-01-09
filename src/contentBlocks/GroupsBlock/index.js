import Carousel from "@/components/organisms/Carousel";

const GroupsBlock = ({ title, groups, blockProperties }) => {
  return (
    <section className="sl-layout">
      <Carousel data={groups} />
    </section>
  );
};

export default GroupsBlock;
