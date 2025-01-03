import { generateApiQuery } from '@/lib/api';
import { MANUAL_PAGE_QUERY } from './query';

export const getManualPage = (slug: string): Promise<any> => {
  return generateApiQuery({
    variables: { slug: slug },
    query: MANUAL_PAGE_QUERY,
  });
};
