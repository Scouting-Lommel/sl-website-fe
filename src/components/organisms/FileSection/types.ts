import { File } from '@/components/molecules/Attachment/types';

export type FileSection = {
  title: string;
  files: { data: { attributes: File }[] };
  links: { id: string; label: string; link: string }[];
};
