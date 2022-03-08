import Head from 'next/head'
import Layout from '../styles/Layout'
import client from '../../lib/api/apollo/client' 
import { getDetailedScoutsGazet, getScoutsGazetAllIds } from '../../lib/api/gazet/queries'
import ScoutsGazetLarge from '../../components/organisms/ScoutsGazetLarge'

export default function ScoutsGazetLarge({fin}) {
    console.log(fin)
  return (
    <Layout>
        <Head>
            <title>Scouts gazet</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <ScoutsGazetLarge article={fin.scoutsgazets.data[0].attributes}/>
    </Layout>
  )
}

export const getStaticPaths = async () => {
    const { data } = await client.query({
        query: getScoutsGazetAllIds()
    })

    const paths = data.scoutsgazets.data.map(gazetId => {
        return {
            params: { id: gazetId.id }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    
    const { data } = await client.query({
        query: getDetailedScoutsGazet(id)
    })

    let fin = data

    return {
        props: {fin},
        revalidate: 86400 // 60*60*24 = every 24 hours
    }
}
