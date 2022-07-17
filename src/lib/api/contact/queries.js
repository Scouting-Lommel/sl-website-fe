import { gql } from "@apollo/client";

const getContactInfo = () => {
  return gql`
    query {
      contactPage {
        data {
          attributes {
            ContactPage {
              ... on ComponentContentBlocksTextSection {
                __typename
                Title
                Text
              }
            }
          }
        }
      }
    }
  `;
};

export default getContactInfo;
