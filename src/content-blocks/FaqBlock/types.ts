import { BlockContainer } from '@/components/atoms/BlockContainer/types';
import { FaqItem } from '@/components/molecules/FaqItem/types';

export type FaqBlock = {
  title: string;
  bottomText?: string;
  faqItems: { data: { attributes: FaqItem }[] };
  blockProperties: BlockContainer;
} & React.HTMLAttributes<HTMLElement>;
