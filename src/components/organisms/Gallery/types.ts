import { CloudinaryImage } from '@/components/atoms/Image/types';

export type Gallery = {
  title: string;
  initialItems: number;
  images: { data: { attributes: CloudinaryImage }[] };
};
