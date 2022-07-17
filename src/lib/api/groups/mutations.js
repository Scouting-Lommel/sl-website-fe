import { gql } from "@apollo/client";

const createAct = () => {
  return gql`
    mutation (
      $title: String
      $description: String
      $startTime: DateTime
      $endTime: DateTime
      $groupID: ID!
    ) {
      createActivity(
        data: {
          StartTime: $startTime
          EndTime: $endTime
          Description: $description
          Title: $title
          Group: $groupID
        }
      ) {
        data {
          id
        }
      }
    }
  `;
};

const editAct = () => {
  return gql`
    mutation (
      $title: String
      $description: String
      $startTime: DateTime
      $endTime: DateTime
      $id: ID!
    ) {
      updateActivity(
        id: $id
        data: {
          StartTime: $startTime
          EndTime: $endTime
          Description: $description
          Title: $title
        }
      ) {
        data {
          id
        }
      }
    }
  `;
};

const deleteAct = () => {
  return gql`
    mutation ($id: ID!) {
      deleteActivity(id: $id) {
        data {
          id
        }
      }
    }
  `;
};

const createFile = () => {
  return gql`
    mutation ($file: Upload!, $name: String) {
      upload(info: { name: $name }, file: $file) {
        data {
          id
        }
      }
    }
  `;
};

const deleteFile = () => {
  return gql`
    mutation ($id: ID!) {
      deleteUploadFile(id: $id) {
        data {
          id
        }
      }
    }
  `;
};

const linkFileToGroup = () => {
  return gql`
    mutation ($groupID: ID!, $fileIDs: [ID]) {
      updateGroup(id: $groupID, data: { Files: $fileIDs }) {
        data {
          id
        }
      }
    }
  `;
};

const editFile = () => {
  return gql`
    mutation ($id: ID!, $name: String) {
      updateUploadFile(id: $id, data: { name: $name }) {
        data {
          id
        }
      }
    }
  `;
};

export {
  createAct,
  editAct,
  createFile,
  linkFileToGroup,
  deleteFile,
  editFile,
  deleteAct,
};
