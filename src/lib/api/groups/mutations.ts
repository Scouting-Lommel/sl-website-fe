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

const ADD_LINK_MUTATION = gql`
  mutation UpdateGroupLink($id: ID!, $links: [ComponentGeneralLinkInput]!) {
    updateGroup(id: $id, data: { links: $links }) {
      data {
        id
      }
    }
  }
`;

export { ADD_FILE_MUTATION, ADD_LINK_MUTATION };
