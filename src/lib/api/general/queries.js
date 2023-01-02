import { gql } from "@apollo/client";

const getGeneralData = () => {
  return gql`
    query {
      generalData {
        data {
          attributes {
            siteName
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
              page
              link
              isButton
              dropdownItems {
                label
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
