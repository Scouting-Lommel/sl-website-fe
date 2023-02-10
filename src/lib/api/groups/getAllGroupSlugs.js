import { gql } from '@apollo/client';

const getAllGroupSlugs = () => {
  return gql`
    query {
      groups {
        data {
          attributes {
            slug
          }
        }
      }
    }
  `;
};

export default getAllGroupSlugs;
