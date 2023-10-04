import { generateApiQuery } from '@/lib/api';
import getRentalLocationBookings from './query.gql';

async function getStrapiCalendarEvents(): Promise<any> {
  return generateApiQuery({
    variables: {},
    query: getRentalLocationBookings,
  });
}

export { getStrapiCalendarEvents };
