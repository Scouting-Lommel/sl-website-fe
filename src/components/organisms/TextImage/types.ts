import { Button } from '@/components/atoms/Button/types';
import { CloudinaryImage } from '@/components/atoms/Image/types';

export type TextImage = {
  title: string;
  content: string;
  images?: CloudinaryImage[];
  ctaButton: Button;
  variant: 'default' | 'reversed';
};
