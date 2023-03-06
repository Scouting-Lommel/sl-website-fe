import { gql } from '@apollo/client';

const getAllUserIds = () => {
  return gql`
    query {
      leaders {
        data {
          id
        }
      }
    }
  `;
};

const getUser = (UID) => {
  return gql`query {
      leaders(filters: { id: { eq: ${UID} } }) {
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
            GroupRoles {
              data {
                attributes {
                  Name
                }
              }
            }
          }
        }
      }
    }`;
};

export { getAllUserIds, getUser };
