import gql from 'graphql-tag';

const ADD_FILE_MUTATION = gql`
  mutation UpdateGroupFiles($id: ID!, $files: [ID]!) {
    updateGroup(id: $id, data: { files: $files }) {
      data {
        id
        attributes {
          files {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export { ADD_FILE_MUTATION };
