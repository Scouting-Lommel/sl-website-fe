import {gql} from '@apollo/client';

const createActivity = () => {
    return gql`
        mutation (
                $title: String
                $description: String
                $startTime: DateTime
                $endTime: DateTime
                $takID: ID!
            ) {
            createActivity(
                data: {
                startTime: $startTime
                endTime: $endTime
                description: $description
                Title: $title
                groups: $takID
                }
            ) {
                data {
                id
                }
            }
        }`
}

const editActivity = () => {
    return gql`
    mutation (
      $title: String
      $description: String
      $startTime: DateTime
      $endTime: DateTime
      $actID: ID!
    ) {
      updateActivity(
        id: $actID
        data: {
          startTime: $startTime
          endTime: $endTime
          description: $description
          Title: $title
        }
      ) {
        data {
          id
        }
      }
    }
  `
}

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
}

const deleteFile = () => {
  return gql`
  mutation($id: ID!){
    deleteUploadFile(id: $id){
      data{
        id
      }
    }
  }
`;
}

const linkFileToGroup = () => {
    return gql`
    mutation ($groupID: ID!, $fileIDs: [ID]) {
      updateGroup(id: $groupID, data: { Files: $fileIDs }) {
        data {
          id
        }
      }
    }
  `
}

const editFile = () => {
  return gql`
  mutation($id: ID!, $name: String){
    updateUploadFile(id: $id, data: {name: $name}){
      data{
        id
      }
    }
  }`;
}

export {createActivity, editActivity, createFile, linkFileToGroup, deleteFile, editFile}