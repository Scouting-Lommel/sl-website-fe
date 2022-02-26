export default function RegisterInfo(){
    return (
        <>
        <div className="flex flex-row justify-center gap-4">
            <div className="flex flex-col justify-center">
              <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="street">
                  Straat*
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="street" type="text" placeholder="sraat"/>
            </div>
            <div className="flex flex-col justify-center">
              <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="number">
                  Nummer*
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="number" type="text" placeholder="nummer"/>
            </div>
            <div className="flex flex-col justify-center">
              <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="bus">
                  Bus
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="bus" type="text" placeholder="bus"/>
            </div>
        </div>
        <div className="flex flex-row justify-center gap-4">
            <div className="flex flex-col justify-center">
              <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="postcode">
                  Postcode*
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="postcode" type="text" placeholder="postcode" defaultValue="3920"/>
            </div>
            <div className="flex flex-col justify-center">
              <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="city">
                  Stad*
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="city" type="text" placeholder="Stad" defaultValue="Lommel"/>
            </div>
        </div>
        <div className="flex flex-row justify-center gap-4">
            <div className="flex flex-col justify-center">
              <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="tel">
                  Telefoon*
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="tel" type="text" placeholder="Telefoon"/>
            </div>
            <div className="flex flex-col justify-center">
              <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="gsm">
                  gsm-nummer
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="gsm" type="text" placeholder="gsm-nummer"/>
            </div>
        </div>
        <div className="flex flex-row justify-center gap-4">
            <div className="flex flex-col justify-center">
              <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="email">
                  E-mail*
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="text" placeholder="E-mail"/>
            </div>
        </div>
        <div className="flex flex-row justify-center gap-1">
              <input id="privacy" name="privacy" type="checkbox" />
              <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="privacy">
              * Ik heb de privacyverklaring van Scouting Lommel gelezen en ga hiermee akkoord. (Deze is conform de GDPR regels)
              </label>
            </div>
            </>
    )
}