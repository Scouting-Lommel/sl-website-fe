import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { getJwtToken } from './strapi/strapi';
import { createUploadLink } from "apollo-upload-client";

const httpLink = createHttpLink({
  uri: `http://localhost:1337/graphql`,
});

const uploadLink = createUploadLink({
  uri: "http://localhost:1337/graphql"
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = getJwtToken()
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

export const uploadClient = new ApolloClient({
  link: authLink.concat(uploadLink),
  cache: new InMemoryCache()
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default client;