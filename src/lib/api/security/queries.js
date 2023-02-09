import { gql } from "@apollo/client";

const getDataFromUserId = (UID) => {
  return gql`query {
      usersPermissionsUser(id: ${UID}) {
        data {
          attributes {
            leader {
              data {
                id
                attributes {
                  firstName
                  lastName
                  totem
                  isGroupLeader
                  group {
                    data {
                      attributes {
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
    }`;
};

export { getDataFromUserId };
