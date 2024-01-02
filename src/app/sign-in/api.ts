import { generateApiQuery } from '@/lib/api';
import SIGNIN_PAGE_QUERY from './query';

export function getLoginPage(): Promise<any> {
  return generateApiQuery({
    query: SIGNIN_PAGE_QUERY,
  });
}
