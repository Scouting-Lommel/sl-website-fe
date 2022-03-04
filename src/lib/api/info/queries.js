import {gql} from '@apollo/client';

const getInfoPage = () => {
    return gql`query {
        infoPage {
          data {
            attributes {
              InfoPage {
                ...on ComponentContentBlocksImageText {
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
                ...on ComponentContentBlocksCallToAction {
                  Title
                  Content
                  Button {
                    Label
                    IsButton
                    Page
                  }
                }
                ...on ComponentContentBlocksFaq {
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
                ...on ComponentContentBlocksMap{
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