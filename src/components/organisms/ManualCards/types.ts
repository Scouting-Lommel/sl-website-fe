import { ManualCard } from '@/components/molecules/ManualCard/types';

export type ManualCards = {
  manualCards: ManualCard[];
} & React.HTMLAttributes<HTMLElement>;
