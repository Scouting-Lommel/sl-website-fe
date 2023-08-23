import { BlockContainer } from '@/components/atoms/BlockContainer/types';
import { MapEmbedProps } from '@/components/organisms/Map/types';

export type MapBlock = MapEmbedProps & { blockProperties: BlockContainer };
