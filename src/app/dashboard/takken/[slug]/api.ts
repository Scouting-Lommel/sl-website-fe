import { generateApiQuery } from '@/lib/api';
import { GROUP_PAGE_QUERY, ACTIVITIES_QUERY, FILES_QUERY } from './query';

export const getGroupPage = (slug: string): Promise<any> => {
  return generateApiQuery({
    variables: { slug: slug },
    query: GROUP_PAGE_QUERY,
  });
};

export const getActivities = (slug: string, date: string): Promise<any> => {
  return generateApiQuery({
    variables: { slug: slug, currDate: date },
    query: ACTIVITIES_QUERY,
  });
};

export const getFiles = (slug: string): Promise<any> => {
  return generateApiQuery({
    variables: { slug: slug },
    query: FILES_QUERY,
  });
};
