import { generateApiQuery } from '@/lib/api';
import { DA_PAGE_QUERY } from './query';

export const getDAPage = (): Promise<any> => {
  return generateApiQuery({
    query: DA_PAGE_QUERY,
  });
};
