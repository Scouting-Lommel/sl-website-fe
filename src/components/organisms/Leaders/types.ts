import { Leader } from '@/components/molecules/Leader/types';

export type Leaders = {
  leaders: { attributes: Leader }[];
} & React.HTMLAttributes<HTMLElement>;
