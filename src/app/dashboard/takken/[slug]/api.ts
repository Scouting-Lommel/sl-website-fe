import { generateApiQuery } from '@/lib/api';
import GROUP_PAGE_QUERY, {
  ACTIVITIES_QUERY,
  CREATE_ACTIVITY_MUTATION,
  DELETE_ARTICLE_MUTATION,
  UPDATE_ACTIVITY_MUTATION,
} from './query';

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

export function createActivity(
  title: string,
  startDate: string,
  startTime: string,
  endDate: string,
  endTime: string,
  description: string,
): Promise<any> {
  return generateApiQuery({
    variables: { title, startDate, startTime, endDate, endTime, description },
    query: CREATE_ACTIVITY_MUTATION,
  });
}

export function updateActivity(
  id: string,
  title: string,
  startDate: string,
  startTime: string,
  endDate: string,
  endTime: string,
  description: string,
): Promise<any> {
  return generateApiQuery({
    variables: { id, title, startDate, startTime, endDate, endTime, description },
    query: UPDATE_ACTIVITY_MUTATION,
  });
}

export function deleteArticle(id: string): Promise<any> {
  return generateApiQuery({
    variables: { id },
    query: DELETE_ARTICLE_MUTATION,
  });
}
