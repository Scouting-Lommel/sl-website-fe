import dynamic from "next/dynamic";

const blockList = {
  ComponentContentBlocksHero: dynamic(() =>
    import("@/components/organisms/Hero")
  ),
};

const Blocks = ({ content }) => {
  if (!content || !content.length) return <></>;

  const contentBlocks = content.map((block, i) => {
    const key = block.__typename;

    if (!(key in blockList)) {
      console.warn(
        `Missing Component for: '${key}', you should create one first in your section folder.`
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
