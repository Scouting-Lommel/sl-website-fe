import { CloudinaryImage } from '@/components/atoms/Image/types';

export type Leader = {
  firstName: string;
  lastName: string;
  image?: { data: { attributes: CloudinaryImage } };
} & React.HTMLAttributes<HTMLElement>;
