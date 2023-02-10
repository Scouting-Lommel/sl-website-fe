import { gql } from '@apollo/client';

const getContactPage = () => {
  return gql`
    query {
      contactPage {
        data {
          attributes {
            pageMeta {
              pageTitle
            }
          }
        }
      }
    }
  `;
};

export default getContactPage;
