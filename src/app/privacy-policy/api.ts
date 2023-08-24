import { generateApiQuery } from '@/lib/api';
import PRIVACY_PAGE_QUERY from './query';

export function getPrivacyPage(): Promise<any> {
  return generateApiQuery({
    query: PRIVACY_PAGE_QUERY,
  });
}
