import { BlockContainer } from '@/components/atoms/BlockContainer/types';
import { MapsLocation } from '@/types/MapsLocation';

export type MapBlock = {
  blockProperties: BlockContainer;
  query?: string;
  location?: MapsLocation;
};
