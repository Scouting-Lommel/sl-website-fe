import dynamic from "next/dynamic";

const blockList = {
  ComponentContentBlocksHero: dynamic(() => import("./Hero")),
  ComponentContentBlocksCallToAction: dynamic(() => import("./CallToAction")),
  ComponentContentBlocksImageText: dynamic(() => import("./ImageText")),
  ComponentContentBlocksCarousel: dynamic(() => import("./Carousel")),
  ComponentContentBlocksBlog: dynamic(() => import("./Blog")),
  ComponentContentBlocksGallery: dynamic(() => import("./Gallery")),
  ComponentGeneralSocials: dynamic(() => import("./Socials")),
};

const Blocks = ({ content }) => {
  if (!content || !content.length) return <></>;

  const contentBlocks = content.map((block, i) => {
    const key = block.__typename;

    if (!(key in blockList)) {
      console.warn(
        `Missing component for: '${key}', you should create one first.`
      );
      return false;
    }

    return blockList[key];
  });

  return (
    <>
      {contentBlocks?.map((Component, i) => {
        return Component ? <Component key={i} {...content[i]} /> : false;
      })}
    </>
  );
};

export default Blocks;
