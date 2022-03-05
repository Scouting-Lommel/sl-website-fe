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

  const getTakPage = (tak) => {
    return gql`query {
        groupPage {
          data {
            attributes {
              ${tak} {
                ... on ComponentGeneralPageInfo {
                  __typename
                  Title
                  URL
                  NoIndex
                }
                ... on ComponentContentBlocksHero {
                  __typename
                  Title
                  IsHomePage
                  Image {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                  Links {
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
                ... on ComponentContentBlocksFileSection {
                  __typename
                  Title
                  Files {
                    data {
                      attributes {
                        name
                        url
                      }
                    }
                  }
                }
                ... on ComponentContentBlocksActivitiesSection {
                  __typename
                  Title
                  Button {
                    Page
                    Label
                    IsButton
                  }
                }
              }
            }
          }
        }
        activities(filters: { Group: { Name: { eq: "${tak}" } } }) {
          data {
            attributes {
              Title
              StartTime
              EndTime
              Description
            }
          }
        }
      }
      `
  }

  export{getGroupsPage, getTakPage}