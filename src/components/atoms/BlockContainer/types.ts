import { CallToActionProps } from '@/components/molecules/CallToAction/types';

type BackgroundImage = {
  alternativeText: string;
  url: string;
};

export type BlockContainerProps = {
  variant: 'light' | 'dark';
  orientation: 'default' | 'reversed';
  slug: string;
  cta?: CallToActionProps;
  bgImage?: BackgroundImage;
  modCtaSocials: boolean;
};
