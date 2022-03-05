import {gql} from '@apollo/client';

const getBookingPage = () => {
    return gql`query {
        bookingsPage {
          data {
            attributes {
              BookingsPage {
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
                ... on ComponentContentBlocksCalendar {
                  __typename
                  Title
                }
                ... on ComponentContentBlocksTextSection {
                  __typename
                  Text
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

  export default getVerhuurInfo;