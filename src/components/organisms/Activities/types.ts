import { Activity } from '@/components/atoms/Activity/types';

export type ActivitySection = {
  activities: { attributes: Activity, id: string }[];
  initialItems: number;
  session?: any;
  tak: string;
};
