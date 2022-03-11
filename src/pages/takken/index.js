import Layout from "../styles/Layout";
import Head from 'next/head'
import client from '../../lib/api/apollo/client'
import { getGroupsPage } from "../../lib/api/groups/queries";
import { getGeneralData } from "../lib/api/general/queries";
import { ImageText } from "../../components/organisms/ImageText";
import { CallToAction } from "../../components/organisms/CallToAction";
import { Carousel } from "../../components/organisms/Carousel";

export default function takken({fin, general}){
  const Title = fin.Title
  const noIndex = fin.NoIndex
  const URL = fin.URL
    return (<Layout generalData={general}>
        <Head>
        </Head>
        {fin.GroupsPage.map((component) => {
          switch (component.__typename) {
            case "ComponentContentBlocksImageText":
              return <ImageText info={component}/>
            case "ComponentContentBlocksCallToAction":
              return <CallToAction info={component}/>
            case "ComponentContentBlocksCarousel":
              return <Carousel info={component}/>
            default:
              break;
          }
        })}
    </Layout>)
}

function reRender(){
  fetch('/api/groups/revalidateGroups')
}

export async function getStaticProps() {
  
    const { data } = await client.query({
        query: getGroupsPage()
    })
    const layoutData = await client.query({
      query: getGeneralData()
    })
    
    let general = layoutData.data.generalData.data.attributes.GeneralData
  
    let fin = data.groupsPage.data.attributes
  
    return {
        props: {fin: fin, general: general},
        revalidate: 86400 // 60*60*24 = every 24 hours
    }
  }