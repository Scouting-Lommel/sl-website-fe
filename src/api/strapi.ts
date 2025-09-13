import { DocumentNode, print } from 'graphql';
import { getCacheOptions } from '@/lib/api/cache';

const fetchAPI = async (
  query: DocumentNode,
  variables?: unknown,
  operation: 'query' | 'mutation' = 'query',
) => {
  let headers: any;
  let cacheOptions: any = {};

  switch (operation) {
    case 'mutation': {
      headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      };
      cacheOptions = { cache: 'no-store' };
      break;
    }
    default: {
      headers = {
        'Content-Type': 'application/json',
      };

      // Determine cache strategy based on query content
      const queryString = print(query);
      const isStaticData =
        queryString.includes('generalData') ||
        queryString.includes('groups') ||
        queryString.includes('rentalLocations');
      const isUserData = queryString.includes('activities') || queryString.includes('files');

      if (isStaticData) {
        cacheOptions = getCacheOptions('STATIC');
      } else if (isUserData) {
        cacheOptions = getCacheOptions('USER');
      } else {
        cacheOptions = getCacheOptions('DYNAMIC');
      }
    }
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query: print(query),
      variables,
    }),
    ...cacheOptions,
  });

  const json = await res.json();

  if (json.errors) {
    console.error('GraphQL Errors:', json.errors);
    const errorMessage = json.errors.map((error: any) => error.message).join(', ');
    throw new Error(`GraphQL Error: ${errorMessage}`);
  }

  if (!res.ok) {
    console.error('HTTP Error:', res.status, res.statusText);
    throw new Error(`HTTP Error: ${res.status} ${res.statusText}`);
  }

  return json.data;
};

export default fetchAPI;
