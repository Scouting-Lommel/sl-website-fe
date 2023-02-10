import { gql } from '@apollo/client';

const getGeneralData = () => {
  return gql`
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
                }
              }
            }
            address
            groupNumber
            bankAccountNumber
            vatNumber
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
};

export { getGeneralData };
