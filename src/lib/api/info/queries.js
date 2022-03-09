import {gql} from '@apollo/client';

const getInfoPage = () => {
    return gql`query {
      infoPage {
        data {
          attributes {
            Title
            URL
            NoIndex
            InfoPage {
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
                Socials
              }
              ... on ComponentContentBlocksFaq {
                __typename
                Title
                Info {
                  data {
                    attributes {
                      Question
                      Answer
                    }
                  }
                }
              }
              ... on ComponentContentBlocksMap {
                __typename
                Title
                Coords
                Content
              }
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
            }
          }
        }
      }
    }
    `
  }

  export{getInfoPage}