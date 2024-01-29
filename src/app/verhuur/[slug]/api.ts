import { generateApiQuery } from '@/lib/api';
import { RENTAL_LOCATION_PAGE_QUERY, RENTAL_LOCATION_BOOKINGS_QUERY } from './query';

export function getRentalLocationPage(slug: string): Promise<any> {
  return generateApiQuery({
    variables: { slug: slug },
    query: RENTAL_LOCATION_PAGE_QUERY,
  });
}

export function getRentalLocationBookings(slug: string): Promise<any> {
  return generateApiQuery({
    variables: { slug: slug },
    query: RENTAL_LOCATION_BOOKINGS_QUERY,
  });
}
