import { Form } from '@/components/organisms/Form/types';

export type FormBlock = Form & {
  formVariant?: 'light' | 'dark';
  formOrientation?: 'default' | 'reversed';
  formSmallPadding?: boolean;
  formMargin?: boolean;
};
