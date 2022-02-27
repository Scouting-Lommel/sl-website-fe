import RegisterChild from '../components/organisms/RegisterChild'
import RegisterInfo from '../components/organisms/RegisterInfo'
import Layout from './styles/Layout'
import { useState } from 'react';
import { uploadClient } from '../apollo-client';
import { registerQuery } from '../strapi/queries';

export default function inschrijven() {
  const [isNotAllFilledIn, setNotAllFilledIn] = useState(false);
  return (
    <Layout>
    <div className="flex flex-row justify-center py-32 ">
    <div className="bg-white shadow-md rounded basis-1/2 px-8 pt-6 pb-8 mb-4 flex flex-col justify-center gap-4 max-w-lg">
      <div id="childrenHeader">
       <RegisterChild id={0}/>
      </div>
      <RegisterInfo />
      <div className="flex flex-col justify-center">
        {isNotAllFilledIn && <label className="text-red-600 text-sm font-bold mb-2 flex flex-row justify-center">Vul alle vereiste velden in</label>}
      <div className="flex flex-row justify-center">
        <button type="button" className="border shadow rounded max-w-fit p-2" onClick={() =>  {register(setNotAllFilledIn)}}>Inschrijven</button>
      </div>
      <label className="flex flex-row justify-center text-sm pt-5">
        (*) = vereist veld
      </label>
      </div>

      </div>
    </div>
    </Layout>
  )
}

function register(setNotAllFilledIn){
  const streetName = document.getElementById("street").value
  const houseNumber = document.getElementById("number").value
  const bus = document.getElementById("bus").value
  const postCode = document.getElementById("postcode").value
  const city = document.getElementById("city").value
  const phone = document.getElementById("tel").value
  const gsm = document.getElementById("gsm").value
  const email = document.getElementById("email").value
  const privacy = document.getElementById("privacy").checked
  if(!privacy){
    setNotAllFilledIn(true)
    return
  }
  if(!streetName){
    setNotAllFilledIn(true)
    return
  }else if(!houseNumber){
    setNotAllFilledIn(true)
    return
  }else if(!postCode){
    setNotAllFilledIn(true)
    return
  }else if(!city){
    setNotAllFilledIn(true)
    return
  }else if(!phone){
    setNotAllFilledIn(true)
    return
  }else if(!email){
    setNotAllFilledIn(true)
    return
  }
  // get every child info
  const currYear = new Date().getFullYear()
  let firstnames = []
  let lastnames = []
  let birthdays = []
  let akabeLst = []
  for (let i = 0; i < 200; i++) {
    const fName = document.getElementById("firstName"+i)
    if(!fName) break
    const firstName = fName.value;
    const lastName =  document.getElementById("lastName"+i).value
    const birthday = document.getElementById("birthday"+i).value
    const akabe = document.getElementById("akabe"+i).checked
    if(!firstName){
      setNotAllFilledIn(true)
      return
    }else if(!lastName){
      setNotAllFilledIn(true)
      return
    }else if(!birthday){
      setNotAllFilledIn(true)
      return
    }
    firstnames.push(firstName)
    lastnames.push(lastName)
    birthdays.push(birthday)
    akabeLst.push(akabe)
  }
  //TODO: send to server
  for (let i = 0; i < firstnames.length; i++) {
    const fn = firstnames[i];
    const ln = lastnames[i];
    const bd = birthdays[i];
    const ak = akabeLst[i];

    // something is wrong, i have no clue what it is but should be looked at later
    uploadClient.mutate({
      mutation: registerQuery,
      variables: {
        fname: fn,
        lname: ln,
        bday: bd,
        street: streetName,
        number: houseNumber,
        bus: bus,
        postcode: postCode,
        city: city,
        phone: phone,
        gsm: gsm,
        email: email,
        akb: ak,
        year: currYear,
      }
    }).then(res => {
      alert("registered succesfully " + res)
    })
    .catch(err => {
      alert(`an error occured trying to register: ${err}`);
    });
  }
}