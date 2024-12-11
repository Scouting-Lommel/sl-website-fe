import { generateApiQuery } from '@/lib/api';
import { GENERAL_DATA } from './query';

export const getGeneralData = (): Promise<any> => {
  return generateApiQuery({
    query: GENERAL_DATA,
  });
};
