import { BlockContainer } from '@/components/atoms/BlockContainer/types';
import { CloudinaryImage } from '@/components/atoms/Image/types';
import { FileSection } from '@/components/organisms/FileSection/types';

export type FileBlock = FileSection & {
  blockProperties: BlockContainer;
};
