import gql from 'graphql-tag';

const ACTIVITIES_QUERY = gql`
  query getActivities($slug: String, $currDate: Date) {
    activities(
      filters: { group: { slug: { eq: $slug } }, endDate: { gte: $currDate } }
      sort: "startDate:asc"
    ) {
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

export { ACTIVITIES_QUERY };
