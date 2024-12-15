import { generateApiQuery } from '@/lib/api';
import { MANUALS_PAGE_QUERY, MANUALS_QUERY } from './query';

export const getManualsPage = (): Promise<any> => {
  return generateApiQuery({
    query: MANUALS_PAGE_QUERY,
  });
};

export const getManuals = (): Promise<any> => {
  return generateApiQuery({
    query: MANUALS_QUERY,
  });
};
