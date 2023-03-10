import { gql } from '@apollo/client';

const getSitemapData = () => {
  return gql`
    query {
      homePage {
        data {
          attributes {
            updatedAt
            pageMeta {
              slug
              noIndex
            }
          }
        }
      }
      groupsPage {
        data {
          attributes {
            updatedAt
            pageMeta {
              slug
              noIndex
            }
          }
        }
      }
      rentalPage {
        data {
          attributes {
            updatedAt
            pageMeta {
              slug
              noIndex
            }
          }
        }
      }
      infoPage {
        data {
          attributes {
            updatedAt
            pageMeta {
              slug
              noIndex
            }
          }
        }
      }
      registerPage {
        data {
          attributes {
            updatedAt
            pageMeta {
              slug
              noIndex
            }
          }
        }
      }
      contactPage {
        data {
          attributes {
            updatedAt
            pageMeta {
              slug
              noIndex
            }
          }
        }
      }
      articlesPage {
        data {
          attributes {
            updatedAt
            pageMeta {
              slug
              noIndex
            }
          }
        }
      }
      drugsAlcoholPolicyPage {
        data {
          attributes {
            updatedAt
            pageMeta {
              slug
              noIndex
            }
          }
        }
      }
      privacyPolicyPage {
        data {
          attributes {
            updatedAt
            pageMeta {
              slug
              noIndex
            }
          }
        }
      }
      groups {
        data {
          attributes {
            updatedAt
            slug
            pageMeta {
              noIndex
            }
          }
        }
      }
      rentalLocations {
        data {
          attributes {
            updatedAt
            slug
            pageMeta {
              noIndex
            }
          }
        }
      }
    }
  `;
};

export default getSitemapData;
