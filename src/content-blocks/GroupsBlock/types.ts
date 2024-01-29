import { BlockContainer } from '@/components/atoms/BlockContainer/types';
import { CloudinaryImage } from '@/components/atoms/Image/types';
import { CallToAction } from '@/components/molecules/CallToAction/types';

export type GroupsBlock = {
  title: string;
  groups: {
    data: {
      attributes: {
        name: string;
        slug: string;
        logo: { data: { attributes: CloudinaryImage } };
      };
    }[];
  };
  cta: CallToAction;
  blockProperties: BlockContainer;
};
