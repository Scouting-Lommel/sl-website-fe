import {gql} from '@apollo/client';


const getGeneralData = () => {
    return gql`query {
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
              Navigation {
                NavigationItems {
                  Label
                  Page
                  IsButton
                }
              }
            }
            ... on ComponentGeneralSocials {
              __typename
              Socials {
                data {
                  attributes {
                    Logo {
                      data {
                        attributes {
                          name
                          url
                        }
                      }
                    }
                    Label
                    Link
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
                    Logo {
                      data {
                        attributes {
                          name
                          url
                        }
                      }
                    }
                    Label
                    Link
                  }
                }
              }
              Address {
                Title
                Email
                Address
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
          }
        }
      }
    }
  }
  `
}

export {getGeneralData}