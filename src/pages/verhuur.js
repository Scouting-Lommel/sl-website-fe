import Layout from "./styles/Layout";
import Head from 'next/head'
import client from '../lib/api/apollo/client'
import { getBookingPage } from "../lib/api/booking/queries";
import { getGeneralData } from "../lib/api/general/queries";
import { ImageText } from "../components/organisms/ImageText";
import { CallToAction } from "../components/organisms/CallToAction";
import { Calendar } from "../components/organisms/Calendar";
import { TextSection } from "../components/organisms/TextSection";
import { Gallery } from "../components/organisms/Gallery";

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
              <ImageText info={component}/>
              break;
            case "ComponentContentBlocksCallToAction":
              <CallToAction info={component}/>
              break;
            case "ComponentContentBlocksCalendar":
              <Calendar info={component}/>
              break;
            case "ComponentContentBlocksTextSection":
              <TextSection info={component}/>
              break;
            case "ComponentContentBlocksGallery":
              <Gallery info={component}/>
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