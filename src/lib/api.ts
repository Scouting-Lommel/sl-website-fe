import { DocumentNode } from 'graphql';
import fetchAPI from '@/api/strapi';

export function generateApiQuery<TData>({ query }: { query: DocumentNode }): Promise<TData> {
  return fetchAPI(query);
}
