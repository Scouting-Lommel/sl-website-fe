import { generateApiQuery } from '@/lib/api';
import {
  CREATE_ACTIVITY_MUTATION,
  DELETE_ACTIVITY_MUTATION,
  UPDATE_ACTIVITY_MUTATION,
} from './mutations';

export function createActivity({
  title,
  startDate,
  startTime,
  endDate,
  endTime,
  description,
}: {
  title: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  description: string;
}): Promise<any> {
  return generateApiQuery({
    variables: { title, startDate, startTime, endDate, endTime, description },
    query: CREATE_ACTIVITY_MUTATION,
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
  });
}

export function deleteActivity(id: string): Promise<any> {
  return generateApiQuery({
    variables: { id },
    query: DELETE_ACTIVITY_MUTATION,
  });
}
