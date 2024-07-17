import gql from 'graphql-tag';

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

export { CREATE_ACTIVITY_MUTATION, UPDATE_ACTIVITY_MUTATION, DELETE_ARTICLE_MUTATION };
