import gql from 'graphql-tag';

const GET_EVENTS_QUERY = gql`
  query getEvents($currDate: Date) {
    events(filters: { startDate: { gte: $currDate } }, sort: "startDate:asc") {
      data {
        attributes {
          title
          startDate
          startTime
          endDate
          endTime
          description
        }
      }
    }
  }
`;

export { GET_EVENTS_QUERY };
