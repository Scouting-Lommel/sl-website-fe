import { Form } from '@/components/organisms/Form/types';

export type FormBlock = Form & {
  variant?: 'light' | 'dark';
  orientation?: 'default' | 'reversed';
  modSmallPadding?: boolean;
  modMargin?: boolean;
};
