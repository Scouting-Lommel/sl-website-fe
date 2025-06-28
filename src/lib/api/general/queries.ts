import gql from 'graphql-tag';
import IMAGE_FRAGMENT from '@/graphql/image-fragment.gql';

export const NAVIGATION_DATA = gql`
  ${IMAGE_FRAGMENT}

  query {
    generalData {
      data {
        attributes {
          logo {
            data {
              attributes {
                ...ImageFragment
              }
            }
          }
          mainNavigation {
            label
            link
            page
            dropdownItems {
              label
              page
              link
            }
            dropdownCta {
              title
              intro
              ctaLink
              ctaLabel
            }
            dropdownTitle
            dropdownButton {
              label
              link
              variant
            }
          }
          globalAlert {
            label
            variant
            enabled
          }
        }
      }
    }
    groups {
      data {
        attributes {
          name
          description
          slug
        }
      }
    }
    rentalLocations {
      data {
        attributes {
          name
          description
          slug
        }
      }
    }
  }
`;

export const FOOTER_DATA = gql`
  query {
    generalData {
      data {
        attributes {
          siteName
          address
          groupNumber
          bankAccountNumber
          vatNumber
          contactItems {
            label
            link
          }
          footerNavigation {
            title
            navItems {
              label
              link
            }
          }
          socials {
            data {
              attributes {
                title
                link
                icon
              }
            }
          }
        }
      }
    }
  }
`;

export const SEO_DATA = gql`
  ${IMAGE_FRAGMENT}

  query {
    generalData {
      data {
        attributes {
          updatedAt
          siteName
          siteDescription
          url
          image {
            data {
              attributes {
                ...ImageFragment
              }
            }
          }
        }
      }
    }
  }
`;
