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
                  IsGroupLeader
                  group {
                    data {
                      attributes {
                        Name
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
