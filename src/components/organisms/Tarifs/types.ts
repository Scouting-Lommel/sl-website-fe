import { Tarif } from '@/components/molecules/Tarif/types';

export type Tarifs = {
  tarifs: { data: { attributes: Tarif }[] };
};
