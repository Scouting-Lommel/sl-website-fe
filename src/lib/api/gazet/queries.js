import { gql } from '@apollo/client';

const getScoutsGazetPreview = (n) => {
  return gql`query{ scoutsgazets(sort: "Date:desc", pagination: {page:1, pageSize:${n}}) {
        data {
          attributes {
            Title
            PreviewText
            Date
            Image {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }`;
};

const getScoutsGazetAllIds = () => {
  return gql`
    query {
      scoutsgazets(sort: "Date:desc") {
        data {
          id
        }
      }
    }
  `;
};

const getDetailedScoutsGazet = (id) => {
  return gql`query{ scoutsgazets(filters: {id: {eq: ${id}}}) {
        data {
          attributes {
            Title
            FullText
            Date
            Image {
              data {
                attributes {
                  url
                }
              }
            }
            Files {
              data {
                attributes {
                  name
                  url
                }
              }
            }
          }
        }
      }
    }`;
};

export { getScoutsGazetPreview, getScoutsGazetAllIds, getDetailedScoutsGazet };
