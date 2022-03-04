import {gql} from '@apollo/client';

const getGroupNameFromUserId = (UID) => {
    return gql`query{
      usersPermissionsUsers(filters: {id: {eq: ${UID}}}){
        data{
          id
          attributes{
            leader{
              data{
                attributes{
                  group{
                    data{
                      attributes{
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }`
  }

  const getLeaderIdFromUserId = (UID) => {
    return gql`query{
      usersPermissionsUsers(filters: {id: {eq: ${UID}}}){
        data{
          id
          attributes{
            leader{
              data{
                id
              }
            }
          }
        }
      }
    }`
  }

  export{getLeaderIdFromUserId, getGroupNameFromUserId}