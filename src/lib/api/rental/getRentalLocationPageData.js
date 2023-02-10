import { gql } from '@apollo/client';

const getRentalLocationPage = () => {
  return gql`
    query getRentalLocationPage($slug: String) {
      rentalLocations(filters: { slug: { eq: $slug } }) {
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

export default getRentalLocationPage;
