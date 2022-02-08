import Head from 'next/head'
import Layout from './styles/Layout'
import client from '../apollo-client'
import { getInfoPage } from '../strapi/queries';
import InfoTextReversed from '../components/organisms/InfoTextReversed';
import Contact from '../components/organisms/Contact';
import FAQ from '../components/organisms/FAQ';
import Map from '../components/organisms/Map';

export default function Info({fin}) {
    return(
        <Layout>
            <Head>
            <title>info</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <InfoTextReversed title={fin.jaarthema.data.attributes.Jaarthema} text={fin.jaarthema.data.attributes.JaarthemaExplanation} image={fin.jaarthema.data.attributes.JaarthemaImage.data.attributes.url} />
        <Contact/>
        <FAQ questions={fin.qenAs.data}/>
        <Map info={fin.info.data.attributes.LocationExplanation}/>
        </Layout>)
}

export async function getStaticProps() {
  
    const { data } = await client.query({
        query: getInfoPage()
    })
  
    let fin = data
  
    return {
        props: {fin},
        revalidate: 86400 // 60*60*24 = every 24 hours
    }
  }