import Head from 'next/head'
import Layout from './styles/Layout'
import client from '../lib/api/apollo/client'
import { getHomePageAttributes } from '../lib/api/home/queries';
import JaarthemaSmall from '../components/organisms/JaarthemaSmall'
import InfoText from '../components/organisms/InfoText'
import ScoutgazetSmall from '../components/organisms/ScoutgazetSmall'
import Socials from '../components/organisms/Socials'
import InschrijfSmall from '../components/organisms/InschrijfSmall'
import TakkenSlider from '../components/organisms/TakkenSlider';

export default function Home({fin}) {
  return (
    <Layout>
        <Head>
            <title>Scouting Lommel</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <script src="./TW-ELEMENTS-PATH/dist/js/index.min.js"></script>
        <JaarthemaSmall jaarthema={fin.jaarthema.data.attributes.Jaarthema} />
        <Socials />
        <InfoText title="Welkom" text={fin.home.data.attributes.Welkomtekst} image={fin.home.data.attributes.Welkomfoto.data.attributes.url}/>
        <InschrijfSmall />
        <TakkenSlider />
        <ScoutgazetSmall gazets={fin.scoutsgazets.data}/>
    </Layout>
  )
}

export async function getStaticProps() {

  const { data } = await client.query({
      query: getHomePageAttributes(2)
  })

  let fin = data

  return {
      props: {fin},
      revalidate: 86400 // 60*60*24 = every 24 hours
  }
}