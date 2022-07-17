import { gql } from "@apollo/client";

const getHomePage = () => {
  return gql`
    query {
      homePage {
        data {
          attributes {
            Title
            NoIndex
            URL
            HomePage {
              ... on ComponentContentBlocksHero {
                __typename
                IsHomePage
                Title
                Image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                Links {
                  Page
                  Label
                  IsButton
                }
              }
              ... on ComponentContentBlocksCallToAction {
                __typename
                Title
                Content
                CTAButton: Button {
                  Label
                  IsButton
                  Page
                }
                Socials
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
                IsLeaderShowcase
                IsGroupsShowcase
                Title
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
                      publishedAt
                      createdAt
                      updatedAt
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
  `;
};

export { getHomePage };
