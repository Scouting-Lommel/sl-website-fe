import Layout from "./styles/Layout";
import Head from 'next/head'
import client from '../lib/api/apollo/client'
import { getBookingPage, getCalendarDates } from "../lib/api/booking/queries";
import { getGeneralData } from "../lib/api/general/queries";
import { ImageText } from "../components/organisms/ImageText";
import { CallToAction } from "../components/organisms/CallToAction";
import { Calendar } from "../components/organisms/Calendar";
import { TextSection } from "../components/organisms/TextSection";
import { Gallery } from "../components/organisms/Gallery";

export default function verhuur({fin, general, calendarDates}){
    const Title = fin.Title
    const noIndex = fin.NoIndex
    const URL = fin.URL
    return (<Layout generalData={general}>
        <Head>
          <title>{fin.Title}</title>
          {fin.NoIndex && <meta name="googlebot" content="noindex"/>}
        </Head>
        {fin.BookingsPage.map((component) => {
          switch (component.__typename) {
            case "ComponentContentBlocksImageText":
              return <ImageText info={component}/>
            case "ComponentContentBlocksCallToAction":
              return <CallToAction info={component}/>
            case "ComponentContentBlocksCalendar":
              return <Calendar info={component} calendarData={calendarDates}/>
            case "ComponentContentBlocksTextSection":
              return <TextSection info={component}/>
            case "ComponentContentBlocksGallery":
              return <Gallery info={component}/>
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
    const calenderData = await client.query({
      query: getCalendarDates()
    })
    // TODO: get all dates on all pages
    
    let general = layoutData.data.generalData.data.attributes.GeneralData;
    let fin = data.bookingsPage.data.attributes;

    return {
        props: {fin: fin, general: general, calendarDates: calenderData.data.rentedDates.data},
        revalidate: 86400 // 60*60*24 = every 24 hours
    }
  }