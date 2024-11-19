import gql from 'graphql-tag';

const SITEMAP_QUERY = gql`
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
  }
`;

export { SITEMAP_QUERY };
