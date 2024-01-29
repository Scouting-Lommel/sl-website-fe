import { generateApiQuery } from '@/lib/api';
import GROUPS_PAGE_QUERY from './query';

export function getGroupsPage(): Promise<any> {
  return generateApiQuery({
    query: GROUPS_PAGE_QUERY,
  });
}
