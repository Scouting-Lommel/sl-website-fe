import { CloudinaryImage } from '@/components/atoms/Image/types';
import { Button } from '@/components/atoms/Button/types';

export type FaqItem = {
  question: String;
  answer: string;
  image?: { data: { attributes: CloudinaryImage } };
  callToAction?: Button;
};
