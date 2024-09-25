import { generateApiQuery } from '@/lib/api';
import { ADD_FILE_MUTATION, EDIT_LINKS_MUTATION } from './mutations';

export function addFile(id: string, files: string[]): Promise<any> {
  return generateApiQuery({
    variables: { id, files },
    query: ADD_FILE_MUTATION,
    operation: 'mutation',
  });
}

export function editLinks(id: string, links: any[]): Promise<any> {
  return generateApiQuery({
    variables: { id, links },
    query: EDIT_LINKS_MUTATION,
    operation: 'mutation',
  });
}
