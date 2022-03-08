import {gql} from '@apollo/client';

const registerUser = () => {
    return gql`mutation($fname: String, $lname: String, $street: String, $number: String, $bus: String,
      $postcode: String, $city: String, $phone: String, $gsm: String, $email: String, $year: String, $sex: String,
      $bday: Date, $akb: Boolean){
createMember(
  data: {
  FirstName: $fname
  LastName: $lname
  Birthday: $bday
  Street: $street
  Number: $number
  Bus: $bus
  PostCode: $postcode
  City: $city
  Phone: $phone
  GSM: $gsm
  Email: $email
  Akabe: $akb
  Year: $year
  Sex: $sex
  }
){
  data{
    id
  }
} 
}`
}

export {registerUser}