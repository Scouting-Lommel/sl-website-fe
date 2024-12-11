import { Button } from '@/components/atoms/Button/types';

export type ActionTitle = {
  title: string;
  tagName: 'h1' | 'h2' | 'h3' | 'h4' | 'span';
  button: Button;
} & React.HTMLAttributes<HTMLElement>;
