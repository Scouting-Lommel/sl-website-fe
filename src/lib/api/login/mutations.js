import {gql} from '@apollo/client';

const loginQuery = () => {
gql`mutation Login($username: String!, $password: String!)
  { login(input: { identifier: $username, password: $password}) {
    jwt
  }
}`
}

export default loginQuery;