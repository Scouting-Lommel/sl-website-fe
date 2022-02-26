import { useState } from 'react';

export default function RegisterChild({id}){
  const [isVisible, setVisible] = useState(false);
  return (
        <div className="bg-white rounded basis-1/2 px-8 =mb-4 flex flex-col justify-center gap-4 max-w-lg">
        <div className="flex flex-row justify-center gap-4">
            <div className="flex flex-col justify-center">
              <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="firstName">
                  Voornaam*
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id={"firstName"+id} type="text" placeholder="Voornaam"/>
            </div>
            <div className="flex flex-col justify-center">
              <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="lastName">
                  Achternaam*
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id={"lastName"+id} type="text" placeholder="Achternaam"/>
            </div>
        </div>
        <div className="flex flex-row justify-center gap-4">
          <div className="flex flex-col justify-center">
            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="birthday">
                Geboortedatum*
            </label>
            <input onChange={() => {guessTak(id)}} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id={"birthday"+id} type="date"/>
          </div>
          <div className="flex flex-col justify-end gap-4">
            <div className="flex flex-row justify-center gap-1">
              <input id={"akabe"+id} name="akabe" type="checkbox" onChange={() => {guessTak(id)}}/>
              <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="akabe">
                  Akabe
              </label>
            </div>
          </div>
          <input className=" appearance-none text-center rounded max-w-md py-2 px-3 text-grey-darker" type="text" id={"tak"+id} readOnly/>
        </div>
        <hr className="shadow fill-black"></hr>
        {isVisible && 
          <RegisterChild id={id+1} />
        }
        {!isVisible && <div className="flex flex-row justify-center">
          <button type="button" className="border shadow rounded max-w-fit p-2" onClick={() => {setVisible(true)}}>Voeg kind toe</button>
        </div>}
    </div>
    )
}

function guessTak(id){
  let calender = document.getElementById("birthday"+id)
  let tak = document.getElementById("tak"+id)
  let akabe = document.getElementById("akabe"+id)
  if(akabe.checked){
    tak.value="Akabe"
    return;
  }
  if(!calender.value) return
  const diff = new Date().getFullYear() - new Date(calender.value).getFullYear();
  if(diff <= 0) return
  if(diff < 6){
    tak.value = "Niet oud genoeg"
  }else if(diff == 6 || diff == 7){
    tak.value = "Kapoenen"
  }else if(diff > 7 && diff < 11){
    tak.value = "Welpen"
  }else if(diff > 10 && diff < 14){
    tak.value = "Jonggivers"
  }else if(diff > 13 && diff < 17){
    tak.value = "Givers"
  }else if(diff == 17){
    tak.value = "Jin"
  }else{
    tak.value = "Leiding"
  }
}