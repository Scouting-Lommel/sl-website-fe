import { File } from '@/components/molecules/File/types';

export type FileSection = {
  title: string;
  files: { data: { attributes: File }[] };
};
