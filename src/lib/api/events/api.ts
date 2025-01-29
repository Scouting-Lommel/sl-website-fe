import { generateApiQuery } from '@/lib/api';
import { GET_EVENTS_QUERY } from './queries';

export const getEvents = (date: string): Promise<any> => {
  return generateApiQuery({
    variables: { currDate: date },
    query: GET_EVENTS_QUERY,
  });
};
