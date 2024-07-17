import gql from 'graphql-tag';

const GROUP_PAGE_QUERY = gql`
  query getGroupPage($slug: String) {
    groups(filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          pageTitle
          files {
            data {
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

const CREATE_ACTIVITY_MUTATION = gql`
  mutation createActivity(
    $title: String!
    $startDate: Date!
    $startTime: Time!
    $endDate: Date!
    $endTime: Time!
    $description: String!
  ) {
    createActivity(
      data: {
        title: $title
        startDate: $startDate
        startTime: $startTime
        endDate: $endDate
        endTime: $endTime
        description: $description
      }
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

const UPDATE_ACTIVITY_MUTATION = gql`
  mutation updateActivity(
    $id: ID!
    $title: String!
    $startDate: Date!
    $startTime: Time!
    $endDate: Date!
    $endTime: Time!
    $description: String!
  ) {
    updateActivity(
      id: $id
      data: {
        title: $title
        startDate: $startDate
        startTime: $startTime
        endDate: $endDate
        endTime: $endTime
        description: $description
      }
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

const DELETE_ARTICLE_MUTATION = gql`
  mutation deleteArticle($id: ID!) {
    deleteArticle(id: $id) {
      article {
        id
      }
    }
  }
`;

export {
  ACTIVITIES_QUERY,
  CREATE_ACTIVITY_MUTATION,
  UPDATE_ACTIVITY_MUTATION,
  DELETE_ARTICLE_MUTATION,
};
export default GROUP_PAGE_QUERY;
