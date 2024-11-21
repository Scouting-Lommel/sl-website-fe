import { File, Link } from '@/components/molecules/Attachment/types';

export type FileSection = {
  title: string;
  files?: { data: { attributes: File }[] };
  links?: Link[];
} & React.HTMLAttributes<HTMLElement>;
