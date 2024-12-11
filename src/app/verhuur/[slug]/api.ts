import { generateApiQuery } from '@/lib/api';
import { RENTAL_LOCATION_PAGE_QUERY } from './query';

export const getRentalLocationPage = (slug: string): Promise<any> => {
  return generateApiQuery({
    variables: { slug: slug },
    query: RENTAL_LOCATION_PAGE_QUERY,
  });
};
