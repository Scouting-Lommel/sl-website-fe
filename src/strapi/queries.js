/**
 * This is only for the graphql queries, the real requests are made in strapi.js.
 * If there is a referal to an image, the url of this image is meant
 */

// Querries

/**
 * gets only the theme
 */
export function getJaarThema(){
    return `jaarthema {
        data {
          attributes {
            Jaarthema
          }
        }
      }`
}

/**
 * gets the welcome message plus image from home page
 */
export function getWelcomeMessage(){
    return `home {
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
      }`
}

/**
 * Gets 6 (predefined) images for the home page
 */
export function getSfeerFotos(){
    return `home {
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
      }`
}

/**
 * gets the preview for the scoutsgazet for the home page == the first n gazets sorted by date
 */
export function getScoutsGazetPreview(n){
    return `scoutsgazets(sort: "Date:desc", pagination: {page:1, pageSize:${n}}) {
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
      }`
}

/**
 * gets all posts for the scoutsgazet
 */
 export function getScoutsGazetAll(){
    return `scoutsgazets(sort: "Date:desc") {
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
      }`
}

/**
 * Gets the full article from the gazets given title
 */
export function getDetailedScoutsGazet(title){
    return `scoutsgazets(filters: {Title: {eq: "${title}"}}) {
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
      }`
}

/**
 * Get the upper info title + description + image on the global takken page
 */
export function getTakkenInfo1(){
    return `takken {
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
      }`
}

/**
 * Get the second info title + description + image on the globel takken page
 */
 export function getTakkenInfo2(){
    return `takken {
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
      }`
}

/**
 * Get the first title + description + image for the verhuur page
 */
export function getVerhuurInfo1(){
    return `verhuur {
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
        }`
}

/**
 * Get the second title + description + image for the verhuur page
 */
 export function getVerhuurInfo2(){
    return `verhuur {
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
        }`
}

/**
 * Get the third title + description + image for the verhuur page
 */
 export function getVerhuurInfo3(){
    return `verhuur {
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
        }`
}

/**
 * Get the pricing part for the verhuur page
 */
export function getVerhuurPricing(){
    return `verhuur {
        data {
          attributes {
              Pricing
            }
          }
        }`
}

/**
 * Gets the image sfor the verhuur page
 */
export function getVerhuurImages(){
    return `verhuur {
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
        }`
}

/**
 * Gets the jaarthema + info + image for the info page
 */
export function getInfoJaarthema(){
    return `jaarthema {
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
      }`
}

/**
 * Gets all FAQ questions and answers
 */
export function getInfoQenA(){
    return `qenAs {
        data {
          attributes {
            Question
            Answer
          }
        }
      }`
}

/**
 * Gets the location info for the info page
 */
export function getInfoLocation(){
    return `info {
        data {
          attributes {
            LocationExplanation
          }
        }
      }`
}

/**
 * Gets the drugs and alcohpol beleid
 */
export function getDrugsAndAlcohol(){
    return `drugsAndAlcohol{
        data{
          attributes{
            Beleid
          }
        }
      }`
}

/**
 * Gets the first info title + description + image for the given tak page
 */
export function getTakpageInfo1(takname){
    return `groups(filters: { name: { eq: "${takname}" } }) {
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
        }`
}

/**
 * Gets the second info title + description + image for the given tak page
 */
 export function getTakpageInfo2(takname){
    return `groups(filters: { name: { eq: "${takname}" } }) {
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
        }`
}

/**
 * Gets the files name + extension + url for the given tak
 */
 export function getTakpageFiles(takname){
    return `groups(filters: { name: { eq: "${takname}" } }) {
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
        }`
}

/**
 * Gets for all leaders from given tak name + image + function
 * Note: will only return active leaders
 */
export function getTakPageSmallLeader(takname){
    return `leaders(filters: { group: { name: { eq: "${takname}" } }, Active: {eq: true} }) {
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
      }`
}

/**
 * gets for the given leader (firstname, lastname) the firstname, lastname, email, phone, totem, image, info, function
 * Note: will not check for active or inactive leader
 */
export function getTakPageLargeLeader(FirstName, LastName){
    return `leaders(filters: { FirstName: { eq: "${FirstName}" }, LastName: { eq: "${LastName}" }) {
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
    return `group_roles(filters: { Name: {eq: "${func}"}}) {
        data {
          attributes {
            description
          }
        }
      }`
}

/**
 * Gets the activities for the given tak with description startTime and endTime
 */
export function getTakPageActivities(takname){
    return `activities(filters: { groups: { name: { eq: "${takname}" } } }, sort: "startTime") {
        data {
          attributes {
            Title
            description
            startTime
            endTime
          }
        }
      }`
}

/**
 * Gets the id + title + description + startime + endtime for the activity in the given tak with the given title
 */
export function getTakPageActivity(takname, title){
    return `activities(filters: { groups: { name: {eq:"${takname}"} },  Title:{eq: "${title}"}}){
        data{
          id
          attributes{
            Title
            startTime
            endTime
            description
          }
        }
      }`
}

/**
 * Get the id for the given takname
 */
export function getTakPageID(takname){
    return `groups(filters: { name: { eq: "${takname}" } }) {
        data {
            id
          }
        }`
}

// Mutations

/**
 * Lets the user log in given the correct username/email and password
 */
export function login(username, password){
    return `login(input: { identifier: "${username}", password: "${password}" }) {
        jwt
      }`
}

/**
 * Create a user with a username, email and password
 */
export function createUser(username, email, pwd){
    return `register(input: { username: "${username}", email: "${email}", password: "${pwd}" }) {
        jwt
        user {
          username
          email
        }
      }`
}

/**
 * create an activity for the given takID with the given title, description, startdate and enddate
 * NOTE: bearer token of verfied user must be in header: "Authorization": "Bearer YOUR_JWT_GOES_HERE"
 * startdate and enddate must be in format: yyyy-mm-ddThh:mm:ss.sssZ
 */
export function createActivity(takID, title, description, startdate, enddate){
    return `createActivity(
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
      }`
}

/**
 * Edit the activity for the given activity id
 * NOTE: bearer token of verfied user must be in header
 * startdate and enddate must be in format: yyy-mm-ddThh:mm:ss.sssZ
 */
export function editActivity(actID, title, description, startdate, enddate){
    return `updateActivity(
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
      }`
}

/**
 * Removes the activity with the given id
 * NOTE: bearer token of verfied user must be in header
 * startdate and enddate must be in format: yyy-mm-ddThh:mm:ss.sssZ
 */
export function deleteActivity(actID){
    return `deleteActivity(
        id: ${actID}
      ){
        data{
          id
        }
      }`
}