import { generateApiQuery } from '@/lib/api';
import RENTAL_PAGE_QUERY from './query';

export function getRentalPage(): Promise<any> {
  return generateApiQuery({
    query: RENTAL_PAGE_QUERY,
  });
}
