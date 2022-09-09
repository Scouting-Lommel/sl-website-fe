import { gql } from "@apollo/client";
import client from "../apollo/client";

const getGroupsPage = () => {
  return gql`
    query {
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
                CTAButton: Button {
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
  `;
};

const getGroupPage = (tak) => {
  let d = new Date()
  let prev = new Date(d.getTime())
  prev.setDate(d.getDate()-1)
  let month
  if(prev.getMonth() + 1 > 9){
    month = `${prev.getMonth() + 1}`
  }else{
    month = `0${prev.getMonth() + 1}`
  }
  let day
  if(prev.getDate() > 9){
    day = `${prev.getDate()}`
  }else{
    day = `0${prev.getDate()}`
  }
  const dateFilter = `${prev.getFullYear()}-${month}-${day}T00:00:00.000Z`
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
      activities(
        filters: {
          Group: { Name: { eq: "${tak}" } }
          EndTime: { gt: "${dateFilter}" }
        }
      ) {
        data {
          id
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
                  ext
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
    `;
};

const getGroupID = async (groupName) => {
  const { data } = await client.query({
    query: gql`query {
          groups (filters: {Name: {eq: "${groupName}"}}){
            data {
              id
            }
          }
        }`,
  });

  return data.groups.data[0].id;
};

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
      }`,
  });

  return data.groups.data[0].attributes.Files.data;
};

const getAllGroups = () => {
  return gql`
    query {
      groups {
        data {
          attributes {
            Name
          }
        }
      }
    }
  `;
};

const getGroupLeaders = async (group) => {
  const { data } = await client.query({
    query: gql`query {
        leaders(filters: {group: {Name: {eq: "${group}"}}}){
          data{
            id
            attributes{
              FirstName
              LastName
              Email
              Totem
              Phone
              Image{
                data{
                  attributes{
                    url
                  }
                }
              }
              GroupRoles{
                data{
                  attributes{
                    Name
                  }
                }
              }
            }
          }
        }
      }`,
  });

  return data.leaders;
};

export {
  getGroupsPage,
  getGroupPage,
  getAllGroups,
  getGroupID,
  getGroupFileIDs,
  getGroupLeaders,
};
