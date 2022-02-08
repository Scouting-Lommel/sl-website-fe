import { getTakPageInfo } from '../../strapi/queries';
import Head from 'next/head'
import Layout from '../styles/Layout'
import client from '../../apollo-client'
import TakPage from '../../components/organisms/TakPage';

export default function kapoenen({fin}) {
    
    return (
        <Layout>
            <Head>
                <title>Kapoenen</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TakPage fin={fin} />
        </Layout>
    );
}    

export async function getStaticProps() {
  
    const { data } = await client.query({
        query: getTakPageInfo("Kapoenen")
    })
  
    let fin = data
  
    return {
        props: {fin},
        revalidate: 3600 // should update more often than other pages, so every hour
    }
  }