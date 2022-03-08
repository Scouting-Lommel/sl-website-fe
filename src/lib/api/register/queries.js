import {gql} from '@apollo/client';

const getRegisterInfo = () => {
    return gql`query{
      registerPage{
        data{
          attributes{
            RegisterPage{
                ...on ComponentContentBlocksBilling{
                  ChildPrice
                  LeaderPrice
                  AcountNr
              }
            }
          }
        }
      }
    }`
  }

  export {getRegisterInfo}