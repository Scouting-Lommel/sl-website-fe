import { gql } from '@apollo/client';

// DO not use the ES6 scrypt, it will throw an error
const loginQuery = gql`
  mutation Login($username: String!, $password: String!) {
    login(input: { identifier: $username, password: $password }) {
      jwt
    }
  }
`;

export { loginQuery };
