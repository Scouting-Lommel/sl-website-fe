import gql from 'graphql-tag';

const REGISTER_MEMBER_MUTATION = gql`
  mutation (
    $firstName: String
    $lastName: String
    $birthday: Date
    $address: String
    $postCode: String
    $locality: String
    $telephoneNumber: String
    $email: String
    $isAkabe: Boolean
    $gender: ENUM_MEMBER_GENDER
    $comments: String
    $workingYear: String
  ) {
    createMember(
      data: {
        firstName: $firstName
        lastName: $lastName
        birthday: $birthday
        address: $address
        postCode: $postCode
        locality: $locality
        phone: $telephoneNumber
        email: $email
        isAkabe: $isAkabe
        gender: $gender
        comments: $comments
        workingYear: $workingYear
      }
    ) {
      data {
        id
      }
    }
  }
`;

export { REGISTER_MEMBER_MUTATION };
