import { gql } from '@apollo/client';

const getRentedDates = (page) => {
  return gql`
    query {
      rentedDates(pagination: {pageSize: 10, page:${page}}) {
        data {
          attributes {
            StartDate
            EndDate
          }
        }
      }
    }`;
};

export default getRentedDates;
