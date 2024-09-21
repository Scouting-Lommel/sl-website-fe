import { generateApiQuery } from '@/lib/api';
import { ADD_FILE_MUTATION, ADD_LINK_MUTATION } from './mutations';

export function addFile(id: string, files: string[]): Promise<any> {
  return generateApiQuery({
    variables: { id, files },
    query: ADD_FILE_MUTATION,
    operation: 'mutation',
  });
}

export function addLink(id: string, links: any[]): Promise<any> {
  return generateApiQuery({
    variables: { id, links },
    query: ADD_LINK_MUTATION,
    operation: 'mutation',
  });
}
