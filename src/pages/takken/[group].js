import Head from 'next/head'
import Layout from '../styles/Layout'
import client from '../../lib/api/apollo/client' 
import { getAllGroups, getGroupPage } from '../../lib/api/groups/queries'
import { getGeneralData } from '../../lib/api/general/queries'
import { Hero } from '../../components/organisms/Hero';
import { ItemCarousel } from '../../components/organisms/Carousel';
import { ImageText } from '../../components/organisms/ImageText';
import { FileSection } from '../../components/organisms/FileSection';
import { ActivitiesSection } from '../../components/organisms/ActivitiesSection';

export default function group({fin, general, group}) {
    const generalInfo = fin.groupPage.data.attributes[group].filter(component => component.__typename == "ComponentGeneralPageInfo")[0]
  return (
    <Layout generalData={general} title={generalInfo.Title} url={generalInfo.URL} noIndex={ generalInfo.NoIndex}>
        {fin.groupPage.data.attributes[group].map((component, i) => {
          switch (component.__typename) {
            case "ComponentContentBlocksHero":
              return <Hero info={component} key={"Tak" + i}/>
            case "ComponentContentBlocksCarousel":
              return <ItemCarousel info={component} key={"Tak" + i}/>
            case "ComponentContentBlocksImageText":
              return <ImageText info={component} key={"Tak" + i}/>
            case "ComponentContentBlocksFileSection":
              return <FileSection info={component} files={fin.groups.data[0].attributes.Files.data} group={group} rerender={reRender}/> 
            case "ComponentContentBlocksActivitiesSection":
              return <ActivitiesSection info={component} activities={fin.activities.data} group={group} rerender={reRender} key={"Tak" + i}/>
            default:
              break;
          }
        })}
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

    let fin = data

    return {
        props: {fin: fin, general: general, group: group },
        revalidate: 60 // 60 = every minute
    }
}