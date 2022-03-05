import {gql} from '@apollo/client';

const getInfoPage = () => {
    return gql`query {
        infoPage {
          data {
            attributes {
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
                }
                ... on ComponentContentBlocksFaq {
                  __typename
                  Title
                  Info {
                    data {
                      attributes {
                        Question
                        Answer
                        Published
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
              }
            }
          }
        }
      }      
      `
  }

  export{getInfoPage}