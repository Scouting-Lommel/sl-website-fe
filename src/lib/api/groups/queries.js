import {gql} from '@apollo/client';
import client from "../apollo/client"

const getGroupsPage = () => {
    return gql`query {
      groupsPage {
        data {
          attributes {
            Title
            URL
            NoIndex
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
                Socials
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

  const getGroupPage = (tak) => {
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
      groups(filters: { Name: { eq: "${tak}" } }) {
        data {
          attributes {
            Name
            Description
            Files {
              data {
                id
                attributes {
                  url
                  name
                }
              }
            }
            Image {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
    `
  }

  const getGroupID = async (groupName) => {
    const { data } = await client.query({
        query: gql`query {
          groups (filters: {Name: {eq: "${groupName}"}}){
            data {
              id
            }
          }
        }`
    })


    return data.groups.data[0].id
  }

  const getGroupFileIDs = async (groupName) => {
    const { data } = await client.query({
      query: gql`query {
        groups(filters: {Name: {eq: "${groupName}"}}){
          data{
            attributes{
              Files{
                data{
                  id
                }
              }
            }
          }
        }
      }`
    })

    return data.groups.data[0].attributes.Files.data
  }

  const getAllGroups = () => {
    return gql`query {
      groups {
        data {
          attributes {
            Name
          }
        }
      }
    }`
  }

  export{getGroupsPage, getGroupPage, getAllGroups, getGroupID, getGroupFileIDs}