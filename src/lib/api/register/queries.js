import { gql } from '@apollo/client';

const getRegisterInfo = () => {
  return gql`
    query {
      registerPage {
        data {
          attributes {
            AcountNr
            ChildPrice
            LeaderPrice
          }
        }
      }
    }
  `;
};

const getAllMembers = (year) => {
  return gql`query{
      members(filters: {Year: {eq: "${year}"}}){
        data{
          attributes{
            FirstName
            LastName
            Sex
            Email
            Birthday
            Akabe
            City
            PostCode
            Street
            Number
            Bus
            Phone
            GSM
            createdAt
          }
        }
      }
    }`;
};

export { getRegisterInfo, getAllMembers };
