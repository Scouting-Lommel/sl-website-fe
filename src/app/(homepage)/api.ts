import { generateApiQuery } from '@/lib/api';
import { HOMEPAGE_QUERY } from './query';

export const getHomePage = async (): Promise<any> => {
  return generateApiQuery({
    query: HOMEPAGE_QUERY,
  });
};
