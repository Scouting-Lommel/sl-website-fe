import { generateApiQuery } from '@/lib/api';
import CONTACT_PAGE_QUERY from './query';

export function getContactPage(): Promise<any> {
  return generateApiQuery({
    query: CONTACT_PAGE_QUERY,
  });
}
