import { Button } from '@/components/atoms/Button/types';
import { CloudinaryImage } from '@/components/atoms/Image/types';

export type FaqItem = {
  question: String;
  answer: string;
  image?: { data: { attributes: CloudinaryImage } };
  callToAction?: Button;
} & React.HTMLAttributes<HTMLElement>;
