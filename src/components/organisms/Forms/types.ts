import { BlockContainer } from '@/components/atoms/BlockContainer/types';

export type Form = {
  variant: 'contact' | 'register' | 'activity' | 'uploadFile' | 'uploadLink' | 'eetfestijn';
  blockProperties: BlockContainer;
  props?: any;
} & React.HTMLAttributes<HTMLElement>;
