import {gql} from '@apollo/client';

const getVerhuurInfo = () => {
    return gql`query{ verhuur {
      data {
        attributes {
          Title1
          Text1
          Image1 {
              data {
                attributes {
                  url
                }
              }
            }
            Title2
            Text2
            Image2 {
                data {
                  attributes {
                    url
                  }
                }
              }
              Title3
              Text3
              Image3 {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                Images {
                  data {
                    attributes {
                      url
                    }
                  }
                }
          }
        }
      }
    }`
  }

  export default getVerhuurInfo;