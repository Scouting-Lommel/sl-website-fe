import { IconNames } from '../Icon/IconMap';

export type IconButton = {
  [x: string]: any;
  label?: string;
  icon: IconNames;
  variant?: 'primary' | 'light' | 'danger';
  href?: string;
  modSmall?: boolean;
} & React.HTMLAttributes<HTMLElement>;
