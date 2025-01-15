import gql from 'graphql-tag';

const GET_FILES_QUERY = gql`
  query getGroupWithFiles($slug: String) {
    groups(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          files {
            data {
              id
              attributes {
                ext
                url
                name
                size
              }
            }
          }
          links {
            id
            label
            link
          }
        }
      }
    }
  }
`;

export { GET_FILES_QUERY };
