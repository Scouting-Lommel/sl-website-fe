import { LucideProps } from 'lucide-react';
import { iconMap, IconNames } from './IconMap';

export interface Icon extends LucideProps {
  name: IconNames;
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xxl' | 'xl';
}
