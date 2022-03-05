import {gql} from '@apollo/client';

const getGroupsPage = (takname) => {
    return gql`query {
        groupsPage {
          data {
            attributes {
              GroupsPage {
                ... on ComponentContentBlocksImageText {
                  __typename
                  Title
                  Content
                  Image {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                  ImageLeftAligned
                }
                ... on ComponentContentBlocksCallToAction {
                  __typename
                  Title
                  Content
                  Button {
                    Label
                    IsButton
                    Page
                  }
                }
                ... on ComponentContentBlocksCarousel {
                  __typename
                  Title
                  IsSmall
                  Items {
                    Title
                    Description
                    Image {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                    Href {
                      Label
                      IsButton
                      Page
                    }
                  }
                }
              }
            }
          }
        }
      }
      `
  }

  const getTakkenInfo = () => {
    return gql`query{ takken {
      data {
        attributes {
          Title2
          Title1
          Text2
          Text1
          Image2 {
            data {
              attributes {
                url
              }
            }
          }
          Image1 {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }`
  }

  export{getGroupsPage}