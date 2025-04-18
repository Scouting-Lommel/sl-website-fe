import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

type BlockList = {
  [key: string]: ComponentType<any>;
};

const blockList: BlockList = {
  ComponentContentBlocksHeroBlock: dynamic(() => import('./HeroBlock')),
  ComponentContentBlocksTextImageBlock: dynamic(() => import('./TextImageBlock')),
  ComponentContentBlocksGroupsBlock: dynamic(() => import('./GroupsBlock')),
  ComponentContentBlocksEventsBlock: dynamic(() => import('./EventsBlock')),
  ComponentContentBlocksGalleryBlock: dynamic(() => import('./GalleryBlock')),
  ComponentContentBlocksPolicyBlock: dynamic(() => import('./PolicyBlock')),
  ComponentContentBlocksLeadersBlock: dynamic(() => import('./LeadersBlock')),
  ComponentContentBlocksTarifsBlock: dynamic(() => import('./TarifsBlock')),
  ComponentContentBlocksFilesBlock: dynamic(() => import('./FilesBlock')),
  ComponentContentBlocksFaqBlock: dynamic(() => import('./FaqBlock')),
  ComponentContentBlocksMapBlock: dynamic(() => import('./MapsBlock')),
  ComponentContentBlocksActivitiesBlock: dynamic(() => import('./ActivitiesBlock')),
  ComponentContentBlocksCalendarBlock: dynamic(() => import('./CalendarBlock')),
  ComponentContentBlocksYearThemeBlock: dynamic(() => import('./YearThemeBlock')),
  ComponentContentBlocksDivider: dynamic(() => import('./Divider')),
};

const Blocks = ({ content }: { content: any }): JSX.Element => {
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
