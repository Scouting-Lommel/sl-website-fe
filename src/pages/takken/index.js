import Layout from "../styles/Layout";
import Head from 'next/head'
import client from '../../lib/api/apollo/client'
import { getGroupsPage } from "../../lib/api/groups/queries";

export default function takken({fin}){
  const Title = fin.Title
  const noIndex = fin.NoIndex
  const URL = fin.URL
    return (<Layout>
        <Head>
        </Head>
        {fin.GroupsPage.map((component) => {
          switch (component.__typename) {
            case "ComponentContentBlocksImageText":
              
              break;
            case "ComponentContentBlocksCallToAction":
            
              break;
            case "ComponentContentBlocksCarousel":
          
              break;
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
  
    let fin = data.groupsPage.data.attributes
  
    return {
        props: {fin},
        revalidate: 86400 // 60*60*24 = every 24 hours
    }
  }