import gql from 'graphql-tag';

const GROUP_PAGE_QUERY = gql`
  query getGroupPage($slug: String) {
    groups(filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          pageTitle
          slug
        }
      }
    }
  }
`;

const ACTIVITIES_QUERY = gql`
  query getActivities($slug: String, $currDate: Date) {
    activities(
      filters: { group: { slug: { eq: $slug } }, endDate: { gte: $currDate } }
      sort: "startDate:asc"
    ) {
      data {
        id
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

const FILES_QUERY = gql`
  query getGroupWithFiles($slug: String) {
    groups(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          files {
            data {
              id
              attributes {
                ext
                url
                name
                size
              }
            }
          }
        }
      }
    }
  }
`;

export { ACTIVITIES_QUERY, FILES_QUERY };
export default GROUP_PAGE_QUERY;
