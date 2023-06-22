import { BackgroundImage } from '@/components/atoms/BlockContainer/types';
import { Button } from '@/components/atoms/Button/types';

import { YearTheme } from '@/components/molecules/YearTheme/types';

type YearThemeData = {
  data: { attributes: YearTheme };
};

export type HeroBlock = {
  title: string;
  subtitle: string;
  variant: 'default' | 'simple' | 'large';
  callToAction?: Button[];
  socialsCta?: { title: string; socialItems: { data: any } };
  yearTheme?: YearThemeData;
  bgImage?: { data: { attributes: BackgroundImage } };
};
