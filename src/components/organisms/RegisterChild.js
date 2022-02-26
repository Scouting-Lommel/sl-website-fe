export default function RegisterChild(){
    return (
        <div className="bg-white rounded basis-1/2 px-8 =mb-4 flex flex-col justify-center gap-4 max-w-lg">
        <div className="flex flex-row justify-center gap-4">
            <div className="flex flex-col justify-center">
              <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="firstName">
                  Voornaam
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="firstName" type="text" placeholder="Voornaam"/>
            </div>
            <div className="flex flex-col justify-center">
              <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="lastName">
                  Achternaam
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="lastName" type="text" placeholder="Achternaam"/>
            </div>
        </div>
        <div className="flex flex-row justify-center gap-4">
          <div className="flex flex-col justify-center">
            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="birthday">
                Geboortedatum
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="birthday" type="date"/>
          </div>
          <div className="flex flex-col justify-end gap-4">
            <div className="flex flex-row justify-center gap-1">
              <input id="akabe" name="akabe" type="checkbox" />
              <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="akabe">
                  Akabe
              </label>
            </div>
          </div>
          <input className=" appearance-none text-center rounded max-w-md py-2 px-3 text-grey-darker" type="text" id="tak" value="None" readOnly/>
        </div>
    </div>
    )
}