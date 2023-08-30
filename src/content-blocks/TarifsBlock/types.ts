import { BlockContainer } from '@/components/atoms/BlockContainer/types';
import { CallToAction } from '@/components/molecules/CallToAction/types';
import { Tarifs } from '@/components/organisms/Tarifs/types';

export type TarifsBlock = {
  title: string;
  tarifs: Tarifs;
  blockProperties: BlockContainer;
  cta: CallToAction;
};
