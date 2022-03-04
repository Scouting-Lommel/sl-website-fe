import Layout from "../styles/Layout";
import Head from 'next/head'
import client from '../../lib/api/apollo/client'
import { getTakkenInfo } from "../../lib/api/groups/queries";
import InfoText from "../../components/organisms/InfoText";
import InfoTextReversed from '../../components/organisms/InfoTextReversed'
import TakkenSlider from "../../components/organisms/TakkenSlider";
import Contact from '../../components/organisms/Contact'

export default function takken({fin}){
    return (<Layout>
        <Head>
            <title>Takken</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>Takken</h1>
        <InfoText title={fin.Title1} text={fin.Text1} image={fin.Image1.data.attributes.url}/>
        <InfoTextReversed title={fin.Title2} text={fin.Text2} image={fin.Image2.data.attributes.url}/>
        <Contact />
        <TakkenSlider />
    </Layout>)
}

export async function getStaticProps() {
  
    const { data } = await client.query({
        query: getTakkenInfo()
    })
  
    let fin = data.takken.data.attributes
  
    return {
        props: {fin},
        revalidate: 86400 // 60*60*24 = every 24 hours
    }
  }