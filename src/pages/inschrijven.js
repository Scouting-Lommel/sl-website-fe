import RegisterChild from '../components/organisms/RegisterChild'
import RegisterInfo from '../components/organisms/RegisterInfo'
import Layout from './styles/Layout'
import client from '../lib/api/apollo/client'
import { uploadClient } from "../lib/api/apollo/mutationClient";
import { useState } from 'react';
import { registerUser } from '../lib/api/register/mutations';
import { getAllMembers, getRegisterInfo } from '../lib/api/register/queries';
import { getGeneralData } from "../lib/api/general/queries";
import { getGroupLeader, isLoggedIn } from '../lib/api/security/security';

export default function inschrijven({fin, general}) {
  const [isNotAllFilledIn, setNotAllFilledIn] = useState(false);
  const [isPaying, setIsPaying] = useState(false);
  const [getFinalChildren, setFinalChildren] = useState([]);
  const [getFinalLeaders, setFinalLeaders] = useState([]);
  return (
    <Layout generalData={general}>
      <Head>
        <title>{fin.Title}</title>
        {fin.NoIndex && <meta name="googlebot" content="noindex"/>}
      </Head>
    <div className="flex flex-row justify-center py-32 ">
    {!isPaying &&
    <div className="bg-white shadow-md rounded basis-1/2 px-8 pt-6 pb-8 mb-4 flex flex-col justify-center gap-4 max-w-lg">
      <div id="childrenHeader">
       <RegisterChild id={0}/>
      </div>
      <RegisterInfo />
      <div className="flex flex-col justify-center">
        {isNotAllFilledIn && <label className="text-red-600 text-sm font-bold mb-2 flex flex-row justify-center">Vul alle vereiste velden in</label>}
      <div className="flex flex-row justify-center">
        <button type="button" className="border shadow rounded max-w-fit p-2" onClick={() =>  {register(setNotAllFilledIn, setIsPaying, setFinalChildren, setFinalLeaders)}}>Inschrijven</button>
      </div>
      <label className="flex flex-row justify-center text-sm pt-5">
        (*) = vereist veld
      </label>
      {
        isLoggedIn() && getGroupLeader() &&
        <div className="flex flex-row justify-center pt-5">
          <button type="button" className="border shadow rounded max-w-fit p-2" onClick={() =>  {downloadAllMemebers()}}>Download</button>
        </div>
      }
      </div>
      </div>}
    {isPaying && 
    <div className="bg-white shadow-md rounded basis-1/2 px-8 pt-6 pb-8 mb-4 flex flex-col justify-center gap-4 max-w-lg">
      <div>Succesvolle inschrijving van de volgende Personen:</div>
      {getFinalChildren.map((info) => {
        return <div>{info}</div>
      })}
      {getFinalLeaders.map((info) => {
        return <div>{info}</div>
      })}
      <div>Gelieve {getFinalLeaders.length*fin.LeaderPrice + getFinalChildren.length*fin.ChildPrice} euro over te schrijven op het volgende rekeningnummer:</div>
      <div>{fin.AcountNr}</div>
      <div>Met vermelding:</div>
      <div>Inschrijving {getFinalChildren.join() +","+ getFinalLeaders.join()}</div>
    </div>}
    </div>
    </Layout>
  )
}

export async function getStaticProps() {
  
  const { data } = await client.query({
      query: getRegisterInfo()
  })
  const layoutData = await client.query({
    query: getGeneralData()
  })
  
  let general = layoutData.data.generalData.data.attributes.GeneralData

  let fin = data.registerPage.data.attributes

  return {
      props: {fin: fin, general: general},
      revalidate: 2592000 // 60*60*24*30 = every 30 days
  }
}

function reRender(){
  fetch('/api/revalidateRegister')
}

function register(setNotAllFilledIn, setIsPaying, setFinalChildren, setFinalLeaders){
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
  const currYear = new Date().getFullYear().toString()
  let firstnames = []
  let lastnames = []
  let birthdays = []
  let akabeLst = []
  let sexList = []
  let leaderList = []
  let count = 0;
  for (let i = 0; i < 200; i++) {
    const fName = document.getElementById("firstName"+i)
    if(!fName) break
    const firstName = fName.value;
    const lastName =  document.getElementById("lastName"+i).value
    const birthday = document.getElementById("birthday"+i).value
    const akabe = document.getElementById("akabe"+i).checked
    const isM = document.getElementById("sexM"+i).checked
    const isF = document.getElementById("sexF"+i).checked
    const isX = document.getElementById("sexX"+i).checked
    if(!firstName){
      setNotAllFilledIn(true)
      return
    }else if(!lastName){
      setNotAllFilledIn(true)
      return
    }else if(!birthday){
      setNotAllFilledIn(true)
      return
    }else if(!isM && !isF && !isX){
      setNotAllFilledIn(true)
      return
    }
    firstnames.push(firstName)
    lastnames.push(lastName)
    birthdays.push(birthday)
    akabeLst.push(akabe)
    leaderList.push(document.getElementById("tak"+i).value == "Leiding")
    if(isM){
      sexList.push("M")
    }else if(isF){
      sexList.push("F")
    }else{
      sexList.push("X")
    }
  }

  for (let i = 0; i < firstnames.length; i++) {
    const fn = firstnames[i];
    const ln = lastnames[i];
    const bd = birthdays[i];
    const ak = akabeLst[i];
    const sx = sexList[i];


    uploadClient.mutate({
      mutation: registerUser(),
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
        sex: sx,
      }
    }).then(res => {
      count += 1;
      if(count == firstnames.length){
        let finChilds = []
        let finLeaders = []
        for (let j = 0; j < firstnames.length; j++) {
          if(leaderList[j]){
            finLeaders.push(firstnames[j] + " " + lastnames[j])
          }else{
            finChilds.push(firstnames[j] + " " + lastnames[j])          
          }
        }
        setFinalChildren(finChilds);
        setFinalLeaders(finLeaders);
        setIsPaying(true)
      }
    })
    .catch(err => {
      alert(`an error occured trying to register: ${err} \n Please contact us with this error message for further information`);
    });
  }
}

async function downloadAllMemebers(){
  const { data } = await client.query({
    query: getAllMembers(new Date().getFullYear())
  })
  let arrayData = [["voornaam", "achternaam", "geslacht", "email", "geboortedatum", 
                    "akabe?", "postcode", "stad", "straat", "straatnummer", "bus", 
                    "telefoonnummer", "gsm", "inschrijf datum"]]
  for (let i = 0; i < data.members.data.length; i++) {
    const element = data.members.data[i].attributes;
    let row = []
    row.push(element.FirstName)
    row.push(element.LastName)
    row.push(element.Sex)
    row.push(element.Email)
    row.push(element.Birthday)
    row.push(element.Akabe)
    row.push(element.PostCode)
    row.push(element.City)
    row.push(element.Street)
    row.push(element.Number)
    row.push(element.Bus)
    row.push(element.Phone)
    row.push(element.GSM)
    row.push(element.createdAt)
    arrayData.push(row)
  }
  let csvContent = "data:text/csv;charset=utf-8," 
    + arrayData.map(e => e.join(",")).join("\n");
  
  var encodedUri = encodeURI(csvContent);
  window.open(encodedUri);
}