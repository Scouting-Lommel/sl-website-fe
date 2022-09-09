import { gql } from "@apollo/client";

const getGeneralData = () => {
  return gql`
    query {
      generalData {
        data {
          attributes {
            GeneralData {
              ... on ComponentGeneralHeader {
                __typename
                Logo {
                  data {
                    attributes {
                      name
                      url
                    }
                  }
                }
                NavigationItems {
                  Title
                  Href
                  IsDropdown
                  DropdownComponents {
                    Page
                    Label
                    IsButton
                  }
                }
              }
              ... on ComponentGeneralSocials {
                __typename
                Socials {
                  data {
                    attributes {
                      Link
                      Label
                    }
                  }
                }
              }
              ... on ComponentGeneralFooter {
                __typename
                Logo {
                  data {
                    attributes {
                      url
                      name
                    }
                  }
                }
                Socials {
                  data {
                    attributes {
                      Label
                      Link
                    }
                  }
                }
                NavigationItems {
                  Page
                  Label
                  IsButton
                }
                Link {
                  Page
                  Label
                  IsButton
                }
              }
              ... on ComponentContentBlocksAddress {
                __typename
                Title
                Email
                Address
              }
            }
          }
        }
      }
    }
  `;
};

export { getGeneralData };
