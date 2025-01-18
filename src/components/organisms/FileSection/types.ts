import { File, Link } from '@/components/molecules/Attachment/types';

export type FileSection = {
  title: string;
  groupSlug: string;
} & React.HTMLAttributes<HTMLElement>;
