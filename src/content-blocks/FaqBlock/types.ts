import { BlockContainer } from '@/components/atoms/BlockContainer/types';
import { FaqItem } from '@/components/molecules/FaqItem/types';

export type FaqBlock = {
  title: string;
  faqItems: { data: { attributes: FaqItem }[] };
  blockProperties: BlockContainer;
};
