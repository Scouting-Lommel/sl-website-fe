import gql from 'graphql-tag';

const SIGNIN_PAGE_QUERY = gql`
  query {
    registerPage {
      data {
        attributes {
          pageMeta {
            noIndex
            metaImage {
              data {
                attributes {
                  name
                  width
                  height
                  url
                  alternativeText
                  caption
                  formats
                }
              }
            }
            metaSocial {
              socialNetwork
              title
              description
              image {
                data {
                  attributes {
                    name
                    width
                    height
                    url
                    alternativeText
                    caption
                    formats
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default SIGNIN_PAGE_QUERY;
