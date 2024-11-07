import { generateApiQuery } from '@/lib/api';
import COOKIE_PAGE_QUERY from './query';

export function getCookiePage(): Promise<any> {
  return generateApiQuery({
    query: COOKIE_PAGE_QUERY,
  });
}
