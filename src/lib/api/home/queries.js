import {gql} from '@apollo/client';

const getHomePage = () => {
    return gql`query {
        homePage {
          data {
            attributes {
              HomePage {
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
                ... on ComponentContentBlocksBlog {
                  __typename
                  Title
                  InitialItems
                  Button {
                    Label
                    IsButton
                    Page
                  }
                  Articles {
                    data {
                      attributes {
                        Title
                        Image {
                          data {
                            attributes {
                              url
                            }
                          }
                        }
                        Content
                        Published
                        DatePosted
                        DateEdited
                      }
                    }
                  }
                }
                ... on ComponentContentBlocksGallery {
                  __typename
                  Title
                  InitialItems
                  Images {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                  Button {
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
      `
  }

  export{getHomePage};