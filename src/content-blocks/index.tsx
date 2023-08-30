import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

type BlockList = {
  [key: string]: ComponentType<any>;
};

const blockList: BlockList = {
  ComponentContentBlocksHeroBlock: dynamic(() => import('./HeroBlock')),
  ComponentContentBlocksTextImageBlock: dynamic(() => import('./TextImageBlock')),
  ComponentContentBlocksGroupsBlock: dynamic(() => import('./GroupsBlock')),
  ComponentContentBlocksTarifsBlock: dynamic(() => import('./TarifsBlock')),
};

const Blocks = ({ content }: { content: any }) => {
  if (!content || !content.length) return <></>;

  const contentBlocks = content.map((block: any) => {
    const key = block.__typename;

    if (!(key in blockList)) {
      console.warn(`Missing component for: '${key}', you should create one first.`);
      return false;
    }

    return blockList[key];
  });

  return (
    <>
      {contentBlocks?.map((Component: any, i: number) => {
        return Component ? <Component key={i} {...content[i]} /> : false;
      })}
    </>
  );
};

export default Blocks;
