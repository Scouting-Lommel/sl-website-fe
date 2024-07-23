import { BlockContainer } from '@/components/atoms/BlockContainer/types';

export type Form = {
  variant: 'contact' | 'register' | 'activity' | 'uploadFile';
  blockProperties: BlockContainer;
  props?: any;
};
