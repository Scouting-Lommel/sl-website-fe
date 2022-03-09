import {gql} from '@apollo/client';

const getRegisterInfo = () => {
    return gql`query {
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
      `
  }

  export {getRegisterInfo}