import Head from 'next/head'
import Layout from './styles/Layout'
import client from '../lib/api/apollo/client'
import { getInfoPage } from '../lib/api/info/queries';
import { getGeneralData } from "../lib/api/general/queries";
import { ImageText } from '../components/organisms/ImageText';
import { CallToAction } from '../components/organisms/CallToAction';
import { FAQ } from '../components/organisms/FAQ';
import { Map } from '../components/organisms/Map';

export default function Info({fin, general}) {
    const Title = fin.Title
    const noIndex = fin.NoIndex
    const URL = fin.URL
    return(
        <Layout generalData={general}>
            <Head>
            </Head>
            {fin.InfoPage.map((component) => {
            switch (component.__typename) {
            case "ComponentContentBlocksImageText":
              <ImageText info={component}/>
              break;
            case "ComponentContentBlocksCallToAction":
              <CallToAction info={component}/>
              break;
            case "ComponentContentBlocksFaq":
              <FAQ info={component}/>
              break;
            case "ComponentContentBlocksMap":
              <Map info={component}/>
              break;
            default:
              break;
          }
        })}
        </Layout>)
}

function reRender(){
  fetch('/api/revalidateInfo')
}

export async function getStaticProps() {
  
    const { data } = await client.query({
        query: getInfoPage()
    })
    const layoutData = await client.query({
      query: getGeneralData()
    })
    
    let general = layoutData.data.generalData.data.attributes.GeneralData
  
    let fin = data.infoPage.data.attributes
  
    return {
        props: {fin: fin, general: general},
        revalidate: 86400 // 60*60*24 = every 24 hours
    }
  }