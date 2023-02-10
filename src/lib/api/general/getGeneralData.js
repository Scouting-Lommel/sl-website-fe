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
              isButton
              dropdownItems {
                label
                page
                link
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
    }
  `;
};

export { getGeneralData };
