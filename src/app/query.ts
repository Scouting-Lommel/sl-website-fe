import gql from 'graphql-tag';

const GENERAL_DATA = gql`
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
                name
                width
                height
                url
                alternativeText
                caption
                formats
                blurhash
              }
            }
          }
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
                blurhash
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

export default GENERAL_DATA;
