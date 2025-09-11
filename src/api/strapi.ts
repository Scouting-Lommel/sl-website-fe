import { DocumentNode, print } from 'graphql';

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
      // Longer cache for static data like navigation/footer
      const isStaticData = print(query).includes('generalData');
      cacheOptions = {
        next: {
          revalidate: isStaticData ? 3600 : process?.env?.APP_ENV === 'production' ? 300 : 10,
          tags: isStaticData ? ['general-data'] : ['dynamic-data'],
        },
      };
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
