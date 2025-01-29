export type ActivitySection = {
  variant: 'activities' | 'events';
  groupSlug?: string;
  initialItems: number;
} & React.HTMLAttributes<HTMLElement>;
