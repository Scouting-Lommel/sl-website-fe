import { generateApiQuery } from '@/lib/api';
import REGISTER_PAGE_QUERY from './query';

export function getRegisterPage(): Promise<any> {
  return generateApiQuery({
    query: REGISTER_PAGE_QUERY,
  });
}
