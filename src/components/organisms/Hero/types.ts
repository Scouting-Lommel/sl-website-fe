import { Button } from '@/components/atoms/Button/types';
import { YearTheme } from '@/components/molecules/YearTheme/types';

export type Hero = {
  title: string;
  subtitle?: string;
  variant: 'default' | 'large' | 'simple';
  callToAction?: Button[];
  yearTheme?: YearTheme;
};
