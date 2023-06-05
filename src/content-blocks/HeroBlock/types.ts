import { BackgroundImage } from '@/components/atoms/BlockContainer/types';
import { CallToAction } from '@/components/molecules/CallToAction/types';
import { YearTheme } from '@/components/molecules/YearTheme/types';

export type HeroBlock = {
  title: string;
  subtitle: string;
  variant: 'default' | 'simple' | 'large';
  callToAction?: CallToAction;
  socialsCta?: { title: string; socialItems: { data: any } };
  yearTheme?: YearTheme;
  bgImage?: { data: { attributes: BackgroundImage } };
};
