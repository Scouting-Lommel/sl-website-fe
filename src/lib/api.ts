import { DocumentNode } from 'graphql';
import fetchAPI from '@/api/strapi';

export function generateApiQuery<TData, TVariables>({
  query,
  variables,
}: {
  query: DocumentNode;
  variables?: TVariables;
}): Promise<TData> {
  return fetchAPI(query, variables);
}
