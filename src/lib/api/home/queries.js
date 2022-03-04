import {gql} from '@apollo/client';

const getHomePageAttributes = (n) => {
    return gql`query {
      jaarthema {
        data {
          attributes {
            Jaarthema
          }
        }
      }
      home {
        data {
          attributes {
            Welkomtekst
            Welkomfoto {
              data {
                attributes {
                  url
                }
              }
            }
            Sfeerfotos (pagination: {page: 1, pageSize:6}){
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
      scoutsgazets(sort: "Date:desc", pagination: {page:1, pageSize:${n}}) {
        data {
          id
          attributes {
            Title
            PreviewText
            Date
            Image {
              data {
                attributes {
                  url
                }
              }
            }
            Files {
              data {
                attributes {
                  name
                  url
                }
              }
            }
          }
        }
      }
    }`
  }

  export{getHomePageAttributes};