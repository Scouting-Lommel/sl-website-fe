import gql from 'graphql-tag';

const DELETE_FILE_MUTATION = gql`
  mutation deleteFile($id: ID!) {
    deleteUploadFile(id: $id) {
      data {
        id
      }
    }
  }
`;

export { DELETE_FILE_MUTATION };
