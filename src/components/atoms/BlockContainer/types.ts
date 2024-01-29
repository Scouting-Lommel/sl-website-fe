import { SocialsCta } from '@/components/molecules/SocialsCta/types';
import { CallToAction } from '@/components/molecules/CallToAction/types';

export type BackgroundImage = {
  alternativeText: string;
  url: string;
};

export type BlockContainer = {
  variant: 'light' | 'dark';
  orientation: 'default' | 'reversed';
  slug: string;
  cta?: CallToAction;
  socialsCta?: SocialsCta;
  bgImage?: BackgroundImage;
  modSmallPadding?: boolean;
  modMargin?: boolean;
};
