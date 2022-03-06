import Head from 'next/head'
import Layout from './styles/Layout'
import client from '../lib/api/apollo/client'
import { getInfoPage } from '../lib/api/info/queries';

export default function Info({fin}) {
    return(
        <Layout>
            <Head>
            </Head>
        </Layout>)
}

export async function getStaticProps() {
  
    const { data } = await client.query({
        query: getInfoPage()
    })
  
    let fin = data.infoPage.data.attributes.InfoPage
  
    return {
        props: {fin},
        revalidate: 86400 // 60*60*24 = every 24 hours
    }
  }