import {gql} from '@apollo/client';

/**
 * How to use:
 * 
 * There are 3 usefull types of rendering of pages: static, client-side rendering and server-side rendering.
 * -> Static rendering will render only once on build time, and then after a set time, so it should be used with large timers
 *    (24 hours +) and with data that does not change freqently
 *    for example: FAQ, verhuur page things, home page info, jaarthema info...
 * -> static path rendering will render on a non static path, so for example the gezets in the scoutsgazet
 * -> server side rendering will be used for things that will update very frequently, every time a page is loaded,
 *    the data is reloaded on server, this can only be used on page level, not on component level
 *    for example: activiteiten
 * 
 * implementation:
 * -> Static rendering
 * 
 * define a function at the BOTTOM of the code, then add a {props} parameter to the header of the function:
 * 
        import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

        export async function getStaticProps() {
            const client = new ApolloClient({
                uri:`${process.env.REACT_APP_BACKEND_URL}/graphql`,
                cache: new InMemoryCache()
            })

            const { data } = await client.query({
                query: ENTER_QUERY_HERE
            })

            return {
                props:data,
                revalidate: TIME_IN_SECONDS
            }
        }
 * 
 * -> client side rendering
 *  The swr library handles caching and other advanced things, so it is highly recommened:
 *  we try to avoid this method
 * 
        import { request } from 'graphql-request'

        const fetcher = query => request('${process.env.REACT_APP_BACKEND_URL}/graphql', query)

        function Profile() {
          const { data, error } = useSWR(ENTER_QUERY_HERE, fetcher)

          if (error) return <div>Failed to load</div>
          if (!data) return <div>Loading...</div>

          return (
            <div>data</div>
          )
        }
        
 * -> server side rendering




    IMPORTANT: learn more via: https://nextjs.org/docs/basic-features/data-fetching/overview

 */

// Querries

export function getHomePageAttributes(n){
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

/**
 * gets only the theme
 */
export function getJaarThema(){
    return gql`query{ jaarthema {
        data {
          attributes {
            Jaarthema
          }
        }
      }
    }`
}

/**
 * gets the welcome message plus image from home page
 */
export function getWelcomeMessage(){
    return gql`query{ home {
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
          }
        }
      }
    }`
}

/**
 * Gets 6 (predefined) images for the home page
 */
export function getSfeerFotos(){
    return gql` query{ home {
        data {
          attributes {
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
    }`
}

/**
 * gets the preview for the scoutsgazet for the home page == the first n gazets sorted by date
 */
export function getScoutsGazetPreview(n){
    return gql`query{ scoutsgazets(sort: "Date:desc", pagination: {page:1, pageSize:${n}}) {
        data {
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
          }
        }
      }
    }`
}

/**
 * gets all posts for the scoutsgazet
 */
 export function getScoutsGazetAll(){
    return gql`query{ scoutsgazets(sort: "Date:desc") {
        data {
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
          }
        }
      }
    }`
}

/**
 * Gets the full article from the gazets given title
 */
export function getDetailedScoutsGazet(title){
    return gql`query{ scoutsgazets(filters: {Title: {eq: "${title}"}}) {
        data {
          attributes {
            Title
            FullText
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

export function getTakkenInfo(){
  return gql`query{ takken {
    data {
      attributes {
        Title2
        Title1
        Text2
        Text1
        Image2 {
          data {
            attributes {
              url
            }
          }
        }
        Image1 {
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

/**
 * Get the upper info title + description + image on the global takken page
 */
export function getTakkenInfo1(){
    return gql`query{ takken {
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
          }
        }
      }
    }`
}

/**
 * Get the second info title + description + image on the globel takken page
 */
 export function getTakkenInfo2(){
    return gql`query{ takken {
        data {
          attributes {
            Title2
            Text2
            Image2 {
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

export function getVerhuurInfo(){
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
              Pricing
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

/**
 * Get the first title + description + image for the verhuur page
 */
export function getVerhuurInfo1(){
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
            }
          }
        }
      }`
}

/**
 * Get the second title + description + image for the verhuur page
 */
 export function getVerhuurInfo2(){
    return gql`query{ verhuur {
        data {
          attributes {
            Title2
            Text2
            Image2 {
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

/**
 * Get the third title + description + image for the verhuur page
 */
 export function getVerhuurInfo3(){
    return gql`query{ verhuur {
        data {
          attributes {
            Title3
            Text3
            Image3 {
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

/**
 * Get the pricing part for the verhuur page
 */
export function getVerhuurPricing(){
    return gql`query{ verhuur {
        data {
          attributes {
              Pricing
            }
          }
        }
      }`
}

/**
 * Gets the image sfor the verhuur page
 */
export function getVerhuurImages(){
    return gql`query{ verhuur {
        data {
          attributes {
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

export function getInfoPage(){
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

/**
 * Gets the jaarthema + info + image for the info page
 */
export function getInfoJaarthema(){
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
    }`
}

/**
 * Gets all FAQ questions and answers
 */
export function getInfoQenA(){
    return gql`query{ qenAs {
        data {
          attributes {
            Question
            Answer
          }
        }
      }
    }`
}

/**
 * Gets the location info for the info page
 */
export function getInfoLocation(){
    return gql`query{ info {
        data {
          attributes {
            LocationExplanation
          }
        }
      }
    }`
}

/**
 * Gets the drugs and alcohpol beleid
 */
export function getDrugsAndAlcohol(){
    return gql`query{ drugsAndAlcohol{
        data{
          attributes{
            Beleid
          }
        }
      }
    }`
}

export function getTakPageInfo(takname){
  return gql`query{ groups(filters: { name: { eq: "${takname}" } }) {
    data {
      id
      attributes {
        name
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
            Files {
              data {
                attributes {
                  name
                  ext
                  url
                }
              }
            } 
        }
      }
    }
    leaders(filters: { group: { name: { eq: "${takname}" } }, Active: {eq: true} }) {
      data {
        attributes {
          FirstName
          LastName
          Email
          Phone
          Totem
          Image {
            data {
              attributes {
                url
              }
            }
          }
          Info
          group_roles {
            data {
              attributes {
                Name
                description
              }
            }
          }
        }
      }
    }
    activities(filters: { groups: { name: { eq: "${takname}" } } }, sort: "startTime") {
      data {
        id
        attributes {
          Title
          description
          startTime
          endTime
        }
      }
    }
  }`
}

/**
 * Gets the first info title + description + image for the given tak page
 */
export function getTakpageInfo1(takname){
    return gql`query{ groups(filters: { name: { eq: "${takname}" } }) {
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
            }
          }
        }
      }`
}

/**
 * Gets the second info title + description + image for the given tak page
 */
 export function getTakpageInfo2(takname){
    return gql`query{ groups(filters: { name: { eq: "${takname}" } }) {
        data {
          attributes {
            Title2
            Text2
            Image2 {
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

/**
 * Gets the files name + extension + url for the given tak
 */
 export function getTakpageFiles(takname){
    return gql`query{ groups(filters: { name: { eq: "${takname}" } }) {
        data {
          attributes {
            Files {
                data {
                  attributes {
                    name
                    ext
                    url
                  }
                }
              }
            }
          }
        }
      }`
}

/**
 * Gets for all leaders from given tak name + image + function
 * Note: will only return active leaders
 */
export function getTakPageSmallLeader(takname){
    return gql`query{ leaders(filters: { group: { name: { eq: "${takname}" } }, Active: {eq: true} }) {
        data {
          attributes {
            FirstName
            LastName
            Image {
                data {
                  attributes {
                    url
                  }
                }
              }
            group_roles {
                data {
                  attributes {
                    Name
                }
              }
            }
          }
        }
      }
    }`
}

/**
 * gets for the given leader (firstname, lastname) the firstname, lastname, email, phone, totem, image, info, function
 * Note: will not check for active or inactive leader
 */
export function getTakPageLargeLeader(UID){
    return gql`query{ leaders(filters: { id: {eq: ${UID}} }) {
        data {
          id
          attributes {
            FirstName
            LastName
            Email
            Phone
            Totem
            Image {
              data {
                attributes {
                  url
                }
              }
            }
            Info
            group_roles {
              data {
                attributes {
                  Name
                }
              }
            }
          }
        }
      }
    }`
}

/**
 * Gets the description for the given leader function
 */
export function getTakPageFunctionDescription(func){
    return gql`query{ group_roles(filters: { Name: {eq: "${func}"}}) {
        data {
          attributes {
            description
          }
        }
      }
    }`
}

/**
 * Gets the activities for the given tak with description startTime and endTime
 */
export function getTakPageActivities(takname){
    return gql`query{ activities(filters: { groups: { name: { eq: "${takname}" } } }, sort: "startTime") {
        data {
          attributes {
            Title
            description
            startTime
            endTime
          }
        }
      }
    }`
}

/**
 * Gets the id + title + description + startime + endtime for the activity in the given tak with the given title
 */
export function getTakPageActivity(takname, title){
    return gql`query{ activities(filters: { groups: { name: {eq:"${takname}"} },  Title:{eq: "${title}"}}){
        data{
          id
          attributes{
            Title
            startTime
            endTime
            description
          }
        }
      }
    }`
}

export function getLeaderIdFromUserId(UID){
  return gql`query{
    usersPermissionsUsers(filters: {id: {eq: ${UID}}}){
      data{
        id
        attributes{
          leader{
            data{
              id
            }
          }
        }
      }
    }
  }`
}

export function getGroupNameFromUserId(UID){
  return gql`query{
    usersPermissionsUsers(filters: {id: {eq: ${UID}}}){
      data{
        id
        attributes{
          leader{
            data{
              attributes{
                group{
                  data{
                    attributes{
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }`
}

export function getAllUserIds(){
  return gql`query{
    leaders{
      data{
        id
      }
    }
  }`
}

/**
 * Get the id for the given takname
 */
export function getTakPageID(takname){
    return gql`query{ groups(filters: { name: { eq: "${takname}" } }) {
        data {
            id
          }
        }
      }`
}

// Mutations

/**
 * Lets the user log in given the correct username/email and password
 */
export const loginQuery = 
    gql`mutation Login($username: String!, $password: String!)
      { login(input: { identifier: $username, password: $password}) {
        jwt
      }
    }`

/**
 * Create a user with a username, email and password
 */
export function createUser(username, email, pwd){
    return gql`mutation{ register(input: { username: "${username}", email: "${email}", password: "${pwd}" }) {
        jwt
        user {
          username
          email
        }
      }
    }`
}

/**
 * create an activity for the given takID with the given title, description, startdate and enddate
 * NOTE: bearer token of verfied user must be in header: "Authorization": "Bearer YOUR_JWT_GOES_HERE"
 * startdate and enddate must be in format: yyyy-mm-ddThh:mm:ss.sssZ
 */
export function createActivity(takID, title, description, startdate, enddate){
    return gql`mutation{ createActivity(
        data: {
          startTime: "${startdate}"
          endTime: "${enddate}"
          description: "${description}"
          Title: "${title}"
          groups: "${takID}"
        }
      ){
        data{
          id
        }
      }
    }`
}

/**
 * Edit the activity for the given activity id
 * NOTE: bearer token of verfied user must be in header
 * startdate and enddate must be in format: yyy-mm-ddThh:mm:ss.sssZ
 */
export function editActivity(actID, title, description, startdate, enddate){
    return gql`mutation{ updateActivity(
        id: ${actID}
        data: {
          startTime: "${startdate}"
          endTime: "${enddate}"
          description: "${description}"
          Title: "${title}"
        }
      ){
        data{
          id
        }
      }
    }`
}

/**
 * Removes the activity with the given id
 * NOTE: bearer token of verfied user must be in header
 * startdate and enddate must be in format: yyy-mm-ddThh:mm:ss.sssZ
 */
export function deleteActivity(actID){
    return gql`mutation{ deleteActivity(
        id: ${actID}
      ){
        data{
          id
        }
      }
    }`
}