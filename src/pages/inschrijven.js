import RegisterChild from '../components/organisms/RegisterChild'
import RegisterInfo from '../components/organisms/RegisterInfo'
import Layout from './styles/Layout'

export default function inschrijven() {
  return (
    <Layout>
    <div className="flex flex-row justify-center py-32 ">
    <div className="bg-white shadow-md rounded basis-1/2 px-8 pt-6 pb-8 mb-4 flex flex-col justify-center gap-4 max-w-lg">
      <div id="childrenHeader">
       <RegisterChild id={0}/>
      </div>
      <RegisterInfo />
      <div className="flex flex-row justify-center">
        <button type="button" className="border shadow rounded max-w-fit p-2" onClick={() =>  {register()}}>Inschrijven</button>
      </div>
      </div>
    </div>
    </Layout>
  )
}

function register(){
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
    console.log("not checked privacy aggreement")
    return
  }
  // todo add requirement specifics for some
  if(!streetName){
    return
  }else if(!houseNumber){
    return
  }else if(!postCode){
    return
  }else if(!city){
    return
  }else if(!phone){
    return
  }else if(!email){
    return
  }
  // get every child info
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
    // TODO: add required info for each
    if(!firstName){
      return
    }else if(!lastName){
      return
    }else if(!birthday){
      return
    }
    firstnames.push(firstName)
    lastnames.push(lastName)
    birthdays.push(birthday)
    akabeLst.push(akabe)
  }
  //TODO: send to server
  console.log(firstnames)
  console.log(lastnames)
  console.log(birthdays)
  console.log(akabeLst)
}