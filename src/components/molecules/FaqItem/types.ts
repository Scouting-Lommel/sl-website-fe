import { CloudinaryImage } from '@/components/atoms/Image/types';
import { Button } from '@/components/atoms/Button/types';

export type FaqItem = {
  question: String;
  answer: String;
  Image?: { data: { attributes: CloudinaryImage } };
  callToAction?: Button;
  finalQuestion?: Boolean;
};
