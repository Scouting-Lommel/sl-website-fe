import { CallToAction } from '@/components/molecules/CallToAction/types';
import { Tarif } from '@/components/molecules/Tarif/types';

export type Tarifs = {
  tarifs: { attributes: Tarif }[];
  cta: CallToAction;
};
