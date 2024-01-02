import { Activity } from '@/components/atoms/Activity/types';

export type ActivitySection = {
  activities: { attributes: Activity }[];
  initialItems: number;
  session?: any;
};
