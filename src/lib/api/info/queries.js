import {gql} from '@apollo/client';

const getInfoPage = () => {
    return gql`query{ jaarthema {
      data {
        attributes {
          Jaarthema
          JaarthemaExplanation
          JaarthemaImage {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
    qenAs {
      data {
        attributes {
          Question
          Answer
        }
      }
    }
    info {
      data {
        attributes {
          LocationExplanation
        }
      }
    }
  }`
  }

  export default getInfoPage