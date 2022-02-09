import Head from 'next/head'
import Layout from '../styles/Layout'
import client from '../../apollo-client'
import ScoutgazetSmall from '../../components/organisms/ScoutgazetSmall'
import { getScoutsGazetPreview } from '../../strapi/queries';

export default function Home({fin}) {
  return (
    <Layout>
        <Head>
            <title>Scouts gazet</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <ScoutgazetSmall gazets={fin.scoutsgazets.data}/>
    </Layout>
  )
}

export async function getStaticProps() {

  const { data } = await client.query({
      query: getScoutsGazetPreview(10)
  })

  let fin = data

  return {
      props: {fin},
      revalidate: 86400 // 60*60*24 = every 24 hours
  }
}
