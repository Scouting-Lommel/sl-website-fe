import { generateApiQuery } from '@/lib/api';
import { DELETE_FILE_MUTATION } from './mutations';

export function deleteFile(id: string): Promise<any> {
  return generateApiQuery({
    variables: { id },
    query: DELETE_FILE_MUTATION,
    operation: 'mutation',
  });
}
