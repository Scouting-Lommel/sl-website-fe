import { generateApiQuery } from '@/lib/api';
import { ACTIVITIES_QUERY } from './query';

export function getActivities(slug: string, date: string): Promise<any> {
  return generateApiQuery({
    variables: { slug: slug, currDate: date },
    query: ACTIVITIES_QUERY,
  });
}
