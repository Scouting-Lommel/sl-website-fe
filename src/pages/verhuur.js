import Layout from "./styles/Layout";
import Head from 'next/head'
import client from '../lib/api/apollo/client'
import { getBookingPage } from "../lib/api/booking/queries";
import { getGeneralData } from "../lib/api/general/queries";

export default function verhuur({fin, general}){
    const Title = fin.Title
    const noIndex = fin.NoIndex
    const URL = fin.URL
    return (<Layout generalData={general}>
        <Head>
        </Head>
        {fin.BookingsPage.map((component) => {
          switch (component.__typename) {
            case "ComponentContentBlocksImageText":
              
              break;
            case "ComponentContentBlocksCallToAction":
            
              break;
            case "ComponentContentBlocksCalendar":
          
              break;
            case "ComponentContentBlocksTextSection":
        
              break;
            case "ComponentContentBlocksGallery":
      
              break;
            default:
              break;
          }
        })}
    </Layout>)
}

function reRender(){
  fetch('/api/revalidateVerhuur')
}

export async function getStaticProps() {
  
    const { data } = await client.query({
        query: getBookingPage()
    })
    const layoutData = await client.query({
      query: getGeneralData()
    })
    
    let general = layoutData.data.generalData.data.attributes.GeneralData
    let fin = data.bookingsPage.data.attributes
  
    return {
        props: {fin: fin, general: general},
        revalidate: 86400 // 60*60*24 = every 24 hours
    }
  }