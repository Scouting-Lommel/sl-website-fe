import { generateApiQuery } from '@/lib/api';
import {
  CREATE_ACTIVITY_MUTATION,
  DELETE_ACTIVITY_MUTATION,
  UPDATE_ACTIVITY_MUTATION,
} from './mutations';
import { GET_ACTIVITIES_QUERY } from './queries';

export const getActivities = (slug: string, date: string): Promise<any> => {
  return generateApiQuery({
    variables: { slug: slug, currDate: date },
    query: GET_ACTIVITIES_QUERY,
  });
};

export function createActivity({
  title,
  startDate,
  startTime,
  endDate,
  endTime,
  description,
  groupId,
}: {
  title: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  description: string;
  groupId: string;
}): Promise<any> {
  return generateApiQuery({
    variables: { title, startDate, startTime, endDate, endTime, description, groupId },
    query: CREATE_ACTIVITY_MUTATION,
    operation: 'mutation',
  });
}

export function updateActivity({
  id,
  title,
  startDate,
  startTime,
  endDate,
  endTime,
  description,
}: {
  id: string;
  title: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  description: string;
}): Promise<any> {
  return generateApiQuery({
    variables: { id, title, startDate, startTime, endDate, endTime, description },
    query: UPDATE_ACTIVITY_MUTATION,
    operation: 'mutation',
  });
}

export function deleteActivity(id: string): Promise<any> {
  return generateApiQuery({
    variables: { id },
    query: DELETE_ACTIVITY_MUTATION,
    operation: 'mutation',
  });
}
