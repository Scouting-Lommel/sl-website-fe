import { BlockContainer } from '@/components/atoms/BlockContainer/types';

export type Form = {
  variant: 'contact' | 'register';
  blockProperties: BlockContainer;
  props: any;
};
