import { gql } from "@apollo/client";

const getGroupPage = () => {
  return gql`
    query getGroupPage($slug: String) {
      groups(filters: { slug: { eq: $slug } }) {
        data {
          attributes {
            pageTitle
            slug
            pageMeta {
              pageTitle
              pageDescription
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
};

export { getGroupPage };
