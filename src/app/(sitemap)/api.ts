import { generateApiQuery } from '@/lib/api';
import SITEMAP_QUERY from './query';

export function getSitemap(): Promise<any> {
  return generateApiQuery({
    query: SITEMAP_QUERY,
  });
}
