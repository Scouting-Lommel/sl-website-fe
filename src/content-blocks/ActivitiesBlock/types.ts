import { Activity } from '@/components/atoms/Activity/types';
import { BlockContainer } from '@/components/atoms/BlockContainer/types';
import { CallToAction } from '@/components/molecules/CallToAction/types';

export type ActivityBlock = {
  title: string;
  initialItems: number;
  blockProperties: BlockContainer;
  callToAction?: CallToAction;
  activities: { attributes: Activity; id: string }[];
  session?: any;
  tak: string;
};
