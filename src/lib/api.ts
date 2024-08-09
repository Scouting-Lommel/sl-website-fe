import { DocumentNode } from 'graphql';
import fetchAPI from '@/api/strapi';

export function generateApiQuery<TData, TVariables>({
  query,
  variables,
  operation = 'query',
}: {
  query: DocumentNode;
  variables?: TVariables;
  operation?: 'query' | 'mutation';
}): Promise<TData> {
  return fetchAPI(query, variables, operation);
}
