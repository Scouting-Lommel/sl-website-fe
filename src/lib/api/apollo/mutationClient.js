import { ApolloClient, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { getJwtToken } from '@/lib/api/security/security';
import { createUploadLink } from 'apollo-upload-client';

const uploadLink = createUploadLink({
  uri: `${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/graphql`,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = getJwtToken();
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const uploadClient = new ApolloClient({
  link: authLink.concat(uploadLink),
  cache: new InMemoryCache(),
});

export { uploadClient };
