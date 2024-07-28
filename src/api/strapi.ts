import { DocumentNode, print } from 'graphql';

async function fetchAPI(
  query: DocumentNode,
  variables?: unknown,
  operation: 'query' | 'mutation' = 'query',
) {
  let headers: any;
  switch (operation) {
    case 'mutation': {
      headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      };
      break;
    }
    default: {
      headers = {
        'Content-Type': 'application/json',
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
    next: { revalidate: process?.env?.APP_ENV === 'production' ? 86400 : 10 },
  });

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

export default fetchAPI;
