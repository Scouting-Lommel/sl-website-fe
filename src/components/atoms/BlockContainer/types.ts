import { CloudinaryImage } from '@/components/atoms/Image/types';
import { SocialsCta } from '@/components/molecules/SocialsCta/types';
import { CallToAction } from '@/components/molecules/CallToAction/types';

export type BlockContainer = {
  variant?: 'light' | 'dark';
  orientation?: 'default' | 'reversed';
  slug: string;
  cta?: CallToAction;
  socialsCta?: SocialsCta;
  bgImage?: CloudinaryImage;
  modSmallPadding?: boolean;
  modNoPadding?: boolean;
  modMargin?: boolean;
};
