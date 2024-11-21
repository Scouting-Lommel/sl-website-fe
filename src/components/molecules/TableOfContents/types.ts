import { Paragraph } from '@/components/molecules/Paragraph/types';

export type TableOfContents = {
  sections: Paragraph[];
} & React.HTMLAttributes<HTMLElement>;
