import { LucideProps } from 'lucide-react';
import { iconMap } from './IconMap';

export type IconNames = keyof typeof iconMap;

export interface Icon extends LucideProps {
  name: IconNames;
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xxl' | 'xl';
}
