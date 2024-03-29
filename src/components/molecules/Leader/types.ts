import { CloudinaryImage } from '@/components/atoms/Image/types';

export type Leader = {
  active: boolean;
  firstName: string;
  lastName: string;
  image: { data: { attributes: CloudinaryImage } };
};
