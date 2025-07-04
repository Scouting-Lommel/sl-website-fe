import gql from 'graphql-tag';
import IMAGE_FRAGMENT from '@/graphql/image-fragment.gql';

const GENERAL_DATA = gql`
  ${IMAGE_FRAGMENT}

  query {
    generalData {
      data {
        attributes {
          updatedAt
          siteName
          siteDescription
          url
          logo {
            data {
              attributes {
                ...ImageFragment
              }
            }
          }
          image {
            data {
              attributes {
                ...ImageFragment
              }
            }
          }
          address
          groupNumber
          bankAccountNumber
          vatNumber
          globalAlert {
            label
            variant
            enabled
          }
          contactItems {
            label
            link
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

export { GENERAL_DATA };
