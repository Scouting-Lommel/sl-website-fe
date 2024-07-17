import { generateApiQuery } from '@/lib/api';
import GROUP_PAGE_QUERY, { ACTIVITIES_QUERY } from './query';

export function getGroupPage(slug: string): Promise<any> {
  return generateApiQuery({
    variables: { slug: slug },
    query: GROUP_PAGE_QUERY,
  });
}

export function getActivities(slug: string, date: string): Promise<any> {
  return generateApiQuery({
    variables: { slug: slug, currDate: date },
    query: ACTIVITIES_QUERY,
  });
}
