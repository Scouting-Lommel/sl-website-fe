import Head from 'next/head'
import Layout from './styles/Layout'
import client from '../lib/api/apollo/client'
import { getInfoPage } from '../lib/api/info/queries';

export default function Info({fin}) {
    const Title = fin.Title
    const noIndex = fin.NoIndex
    const URL = fin.URL
    return(
        <Layout>
            <Head>
            </Head>
            {fin.InfoPage.map((component) => {
            switch (component.__typename) {
            case "ComponentContentBlocksImageText":
              
              break;
            case "ComponentContentBlocksCallToAction":
            
              break;
            case "ComponentContentBlocksFaq":
          
              break;
            case "ComponentContentBlocksMap":
        
              break;
            default:
              break;
          }
        })}
        </Layout>)
}

export async function getStaticProps() {
  
    const { data } = await client.query({
        query: getInfoPage()
    })
  
    let fin = data.infoPage.data.attributes
  
    return {
        props: {fin},
        revalidate: 86400 // 60*60*24 = every 24 hours
    }
  }