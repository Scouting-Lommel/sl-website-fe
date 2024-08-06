import { generateApiQuery } from '@/lib/api';
import { ADD_FILE_MUTATION } from './mutations';

export function addFile(id: string, files: string[]): Promise<any> {
  return generateApiQuery({
    variables: { id, files },
    query: ADD_FILE_MUTATION,
    operation: 'mutation',
  });
}
