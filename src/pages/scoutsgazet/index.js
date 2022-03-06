import Head from 'next/head'
import Layout from '../styles/Layout'
import client from '../../lib/api/apollo/client'
import ScoutgazetSmall from '../../components/organisms/ScoutgazetSmall'

export default function Home({fin}) {
  return (
    <Layout>
        <Head>
        </Head>
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
