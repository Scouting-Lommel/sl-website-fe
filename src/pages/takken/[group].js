import Head from 'next/head'
import Layout from '../styles/Layout'
import client from '../../lib/api/apollo/client' 
import { getAllGroups, getGroupPage } from '../../lib/api/groups/queries'

export default function group({fin}) {
    console.log(fin)
  return (
    <Layout>
        <Head>
        </Head>
        
    </Layout>
  )
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

    let fin = data.groupsPage.attributes.GroupsPage

    return {
        props: {fin},
        revalidate: 60 // 60 = every minute
    }
}