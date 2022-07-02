import Head from 'next/head'
import Layout from './styles/Layout'
import client from '../lib/api/apollo/client'
import { getGeneralData } from "../lib/api/general/queries";
import getContactInfo from '../lib/api/contact/queries';
import {TextSection} from '../components/organisms/TextSection'

export default function contact({fin, general}) {
  console.log(fin)
  return (
    <Layout generalData={general}>
        <Head>
          <title>{fin.Title}</title>
          {fin.NoIndex && <meta name="googlebot" content="noindex"/>}
        </Head>
        {fin.ContactPage.map((component, i) => {
          switch (component.__typename) {
            case "ComponentContentBlocksTextSection":
              return <TextSection info={component} key={"contact" + i}/>
            default:
              break;
          }
        })}

    </Layout>
  )
}

export async function getStaticProps() {
  
  const { data } = await client.query({
      query: getContactInfo()
  })
  const layoutData = await client.query({
    query: getGeneralData()
  })
  
  let general = layoutData.data.generalData.data.attributes.GeneralData

  let fin = data.contactPage.data.attributes

  return {
      props: {fin: fin, general: general},
      revalidate: 86400 // 60*60*24 = every 24 hours
  }
}

