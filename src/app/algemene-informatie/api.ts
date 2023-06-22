import { generateApiQuery } from '@/lib/api';
import INFO_PAGE_QUERY from './query';

export function getInfoPage(): Promise<any> {
  return generateApiQuery({
    query: INFO_PAGE_QUERY,
  });
}
