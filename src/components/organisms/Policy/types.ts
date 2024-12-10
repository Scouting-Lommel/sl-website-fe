import { Paragraph } from '@/components/molecules/Paragraph/types';

export type Policy = {
  sections: Paragraph[];
} & React.HTMLAttributes<HTMLElement>;
