import { FaqItem } from '@/components/molecules/FaqItem/types';

export type FAQ = {
  title: String;
  faqItems: { attributes: FaqItem }[];
};
