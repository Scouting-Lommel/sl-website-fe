import RegisterChild from '../components/organisms/RegisterChild'
import RegisterInfo from '../components/organisms/RegisterInfo'
import Layout from './styles/Layout'

export default function inschrijven() {
  return (
    <Layout>
    <div className="flex flex-row justify-center py-32 ">
    <div className="bg-white shadow-md rounded basis-1/2 px-8 pt-6 pb-8 mb-4 flex flex-col justify-center gap-4 max-w-lg">
      <div id="childrenHeader">
       <RegisterChild />
      </div>
      <div className="flex flex-row justify-center">
        <button type="button" className="border shadow rounded max-w-fit p-2" onClick={() => {addChild()}}>Voeg kind toe</button>
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
  
}

function addChild(){

}