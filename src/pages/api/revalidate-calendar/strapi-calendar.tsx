import { generateApiQuery } from '@/lib/api';
// @ts-ignore
import getRentalLocationBookings from './query.gql';

async function getStrapiCalendarEvents(): Promise<any> {
  return generateApiQuery({
    variables: {},
    query: getRentalLocationBookings,
  });
}

export { getStrapiCalendarEvents };
