import { generateApiQuery } from '@/lib/api';
import { SITEMAP_QUERY } from './query';

export const getSitemap = async (): Promise<any> => {
  return generateApiQuery({
    query: SITEMAP_QUERY,
  });
};
