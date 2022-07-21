import dynamic from "next/dynamic";

const blockList = {
  ComponentContentBlocksHero: dynamic(() => import("./Hero")),
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
