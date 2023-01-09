import { gql } from "@apollo/client";

const getGroupsPage = () => {
  return gql`
    query {
      groupsPage {
        data {
          attributes {
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

export { getGroupsPage };
