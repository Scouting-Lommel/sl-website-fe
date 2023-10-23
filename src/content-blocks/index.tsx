import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

type BlockList = {
  [key: string]: ComponentType<any>;
};

const blockList: BlockList = {
  ComponentContentBlocksHeroBlock: dynamic(() => import('./HeroBlock')),
  ComponentContentBlocksTextImageBlock: dynamic(() => import('./TextImageBlock')),
  ComponentContentBlocksGroupsBlock: dynamic(() => import('./GroupsBlock')),
  ComponentContentBlocksGalleryBlock: dynamic(() => import('./GalleryBlock')),
  ComponentContentBlocksPolicyBlock: dynamic(() => import('./PolicyBlock')),
  ComponentContentBlocksLeadersBlock: dynamic(() => import('./LeadersBlock')),
  ComponentContentBlocksTarifsBlock: dynamic(() => import('./TarifsBlock')),
  ComponentContentBlocksFilesBlock: dynamic(() => import('./FilesBlock')),
  ComponentContentBlocksFaqBlock: dynamic(() => import('./FaqBlock')),
  ComponentContentBlocksMapBlock: dynamic(() => import('./MapsBlock')),
  ComponentContentBlocksForm: dynamic(() => import('./RegisterBlock')),
  ComponentContentBlocksActivitiesBlock: dynamic(() => import('./ActivitiesBlock')),
  ComponentContentBlocksCalendarBlock: dynamic(() => import('./CalendarBlock')),
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
