import { generateApiQuery } from '@/lib/api';
import HOMEPAGE_QUERY from './query';

export function getHomePage(): Promise<any> {
  return generateApiQuery({
    query: HOMEPAGE_QUERY,
  });
}
