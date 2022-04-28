import {gql} from '@apollo/client';

const getBookingPage = () => {
    return gql`query {
      bookingsPage {
        data {
          attributes {
            Title
            URL
            NoIndex
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
                Socials
              }
              ... on ComponentContentBlocksCalendar {
                __typename
                Title
              }
              ... on ComponentContentBlocksTextSection {
                __typename
                Text
                Title
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

  const getCalendarDates = () => {
    return gql`
    query {
      rentedDates {
        data {
          attributes {
            StartDate
            EndDate
          }
        }
      }
    }`
  }

  export {getBookingPage, getCalendarDates};