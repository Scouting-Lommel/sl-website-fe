import { gql } from '@apollo/client';

const getRentalPageData = () => {
  return gql`
    query {
      rentalPage {
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

export default getRentalPageData;
