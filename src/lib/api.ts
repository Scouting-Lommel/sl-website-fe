import { DocumentNode } from 'graphql';
import fetchAPI from '@/api/strapi';

export function generateApiQuery<TData, TVariables>({
  query,
  variables,
  token,
}: {
  query: DocumentNode;
  variables?: TVariables;
  token?: string;
}): Promise<TData> {
  return fetchAPI(query, variables, token);
}
