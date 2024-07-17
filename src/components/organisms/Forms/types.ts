import { BlockContainer } from '@/components/atoms/BlockContainer/types';

export type Form = {
  variant: 'contact' | 'register' | 'activity';
  blockProperties: BlockContainer;
  props?: any;
};
