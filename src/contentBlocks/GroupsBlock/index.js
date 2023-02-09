import BlockContainer from "@/components/atoms/BlockContainer";
import Carousel from "@/components/organisms/Carousel";

const GroupsBlock = ({ title, groups, blockProperties }) => {
  return (
    <BlockContainer variant="dark" orientation="reversed" slug="hero">
      <section className="sl-layout">
        <Carousel data={groups} />
      </section>
    </BlockContainer>
  );
};

export default GroupsBlock;
