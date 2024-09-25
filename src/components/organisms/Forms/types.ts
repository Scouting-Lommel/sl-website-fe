import { BlockContainer } from '@/components/atoms/BlockContainer/types';

export type Form = {
  variant: 'contact' | 'register' | 'activity' | 'uploadFile' | 'uploadLink';
  blockProperties: BlockContainer;
  props?: any;
};
