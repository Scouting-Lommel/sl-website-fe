import { CallToAction } from '@/components/molecules/CallToAction/types';

type BackgroundImage = {
  alternativeText: string;
  url: string;
};

export type BlockContainer = {
  variant: 'light' | 'dark';
  orientation: 'default' | 'reversed';
  slug: string;
  cta?: CallToAction;
  bgImage?: BackgroundImage;
  modCtaSocials: boolean;
};
