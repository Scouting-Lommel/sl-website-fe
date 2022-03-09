import Head from 'next/head'
import Layout from '../styles/Layout'
import client from '../../lib/api/apollo/client' 
import { getAllGroups, getGroupPage } from '../../lib/api/groups/queries'
import { getGeneralData } from "../lib/api/general/queries";

export default function group({fin, general}) {
    const generalInfo = fin.filter(component => component.__typename == "ComponentGeneralPageInfo")[0]
    // const Title = generalInfo.Title
    // const noIndex = generalInfo.NoIndex
    // const URL = generalInfo.URL
  return (
    <Layout generalData={general}>
        <Head>
        </Head>
        {fin.map((component) => {
          switch (component.__typename) {
            case "ComponentContentBlocksHero":
              
              break;
            case "ComponentContentBlocksCarousel":
            
              break;
            case "ComponentContentBlocksImageText":
          
              break;
            case "ComponentContentBlocksFileSection":
        
              break;
            case "ComponentContentBlocksActivitiesSection":
        
              break;
            default:
              break;
          }
        })}
        <button onClick={() => reRender()}>revalidate</button>
    </Layout>
  )
}

function reRender(){
  fetch('/api/groups/revalidateGroup')
}

export const getStaticPaths = async () => {
    const { data } = await client.query({
        query: getAllGroups()
    })

    const paths = data.groups.data.map(groupName => {
        return {
            params: { group: groupName.attributes.Name }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const group = context.params.group;
    
    const { data } = await client.query({
        query: getGroupPage(group)
    })
    const layoutData = await client.query({
      query: getGeneralData()
    })
    
    let general = layoutData.data.generalData.data.attributes.GeneralData

    let fin = data.groupPage.data.attributes[group]

    return {
        props: {fin: fin, general: general },
        revalidate: 60 // 60 = every minute
    }
}