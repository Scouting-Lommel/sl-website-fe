import {gql} from '@apollo/client';

const getTakPageInfo = (takname) => {
    return gql`query{ groups(filters: { name: { eq: "${takname}" } }) {
      data {
        id
        attributes {
          name
          Title1
          Text1
          Image1 {
              data {
                attributes {
                  url
                }
              }
            }
            Title2
            Text2
            Image2 {
                data {
                  attributes {
                    url
                  }
                }
              }
              Files {
                data {
                  id
                  attributes {
                    name
                    ext
                    url
                  }
                }
              } 
          }
        }
      }
      leaders(filters: { group: { name: { eq: "${takname}" } }, Active: {eq: true} }) {
        data {
          attributes {
            FirstName
            LastName
            Email
            Phone
            Totem
            Image {
              data {
                attributes {
                  url
                }
              }
            }
            Info
            group_roles {
              data {
                attributes {
                  Name
                  description
                }
              }
            }
          }
        }
      }
      activities(filters: { groups: { name: { eq: "${takname}" } } }, sort: "startTime") {
        data {
          id
          attributes {
            Title
            description
            startTime
            endTime
          }
        }
      }
    }`
  }

  const getTakkenInfo = () => {
    return gql`query{ takken {
      data {
        attributes {
          Title2
          Title1
          Text2
          Text1
          Image2 {
            data {
              attributes {
                url
              }
            }
          }
          Image1 {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }`
  }

  export{getTakPageInfo, getTakkenInfo}