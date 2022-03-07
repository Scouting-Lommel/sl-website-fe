import Layout from "./styles/Layout";
import Head from 'next/head'
import client from '../lib/api/apollo/client'
import { getBookingPage } from "../lib/api/booking/queries";

export default function takken({fin}){
    const Title = fin.Title
    const noIndex = fin.NoIndex
    const URL = fin.URL
    return (<Layout>
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

export async function getStaticProps() {
  
    const { data } = await client.query({
        query: getBookingPage()
    })
  
    let fin = data.bookingsPage.data.attributes
  
    return {
        props: {fin},
        revalidate: 86400 // 60*60*24 = every 24 hours
    }
  }