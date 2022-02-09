import Layout from "./styles/Layout";
import Head from 'next/head'
import client from '../apollo-client'
import { getVerhuurInfo } from "../strapi/queries";
import InfoText from "../components/organisms/InfoText";
import Contact from "../components/organisms/Contact";
import InfoTextReversed from "../components/organisms/InfoTextReversed";

export default function takken({fin}){
    return (<Layout>
        <Head>
            <title>Verhuur</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <InfoText title={fin.Title1} text={fin.Text1} image={fin.Image1.data.attributes.url}/>
        <Contact />
        <InfoTextReversed title={fin.Title2} text={fin.Text2} image={fin.Image2.data.attributes.url} />
        <InfoText title={fin.Title3} text={fin.Text3} image={fin.Image3.data.attributes.url}/>
        <div>Alles is duur</div>
        

    </Layout>)
}

export async function getStaticProps() {
  
    const { data } = await client.query({
        query: getVerhuurInfo()
    })
  
    let fin = data.verhuur.data.attributes
  
    return {
        props: {fin},
        revalidate: 86400 // 60*60*24 = every 24 hours
    }
  }