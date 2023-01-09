import { gql } from "@apollo/client";

const getAllRentalLocationSlugs = () => {
  return gql`
    query {
      rentalLocations {
        data {
          attributes {
            slug
          }
        }
      }
    }
  `;
};

export default getAllRentalLocationSlugs;
