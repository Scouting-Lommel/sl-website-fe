import { generateApiQuery } from '@/lib/api';
import { DELETE_FILE_MUTATION } from './mutations';
import { GET_FILES_QUERY } from './queries';

export const getFiles = (slug: string): Promise<any> => {
  return generateApiQuery({
    variables: { slug: slug },
    query: GET_FILES_QUERY,
  });
};

export function deleteFile(id: string): Promise<any> {
  return generateApiQuery({
    variables: { id },
    query: DELETE_FILE_MUTATION,
    operation: 'mutation',
  });
}
