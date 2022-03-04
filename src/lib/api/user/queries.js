import {gql} from '@apollo/client';

const getAllUserIds = () => {
    return gql`query{
      leaders{
        data{
          id
        }
      }
    }`
  }

const  getTakPageLargeLeader = (UID) => {
    return gql`query{ leaders(filters: { id: {eq: ${UID}} }) {
        data {
          id
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
                }
              }
            }
          }
        }
      }
    }`
}

  export {getAllUserIds, getTakPageLargeLeader}