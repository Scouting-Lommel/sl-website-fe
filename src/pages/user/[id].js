import Head from 'next/head'
import Layout from '../styles/Layout'
import client from '../../apollo-client' 
import { getAllUserIds, getTakPageLargeLeader } from '../../strapi/queries'
import { getUserID, isLoggedIn } from '../../strapi/strapi'
import LargeLeaderEditor from '../../components/organisms/LargeLeaderEditor'

export default function user({fin}) {
    console.log(fin.leaders.data[0].attributes)
  return (
    <Layout>
        <Head>
            <title>{fin.leaders.data[0].attributes.FirstName + " " + fin.leaders.data[0].attributes.LastName}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        {!isLoggedIn() && <div> Forbidden acces</div>}
        {isLoggedIn() && getUserID() != fin.leaders.data[0].id && <div> Forbidden access</div>}
        {isLoggedIn() && getUserID() == fin.leaders.data[0].id && <LargeLeaderEditor info={fin.leaders.data[0].attributes}></LargeLeaderEditor>}
    </Layout>
  )
}

export const getStaticPaths = async () => {
    const { data } = await client.query({
        query: getAllUserIds()
    })

    console.log(data)

    const paths = data.leaders.data.map(user => {
        return {
            params: { id: user.id }
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
        query: getTakPageLargeLeader(id)
    })

    let fin = data

    return {
        props: {fin},
        revalidate: 86400 // 60*60*24 = every 24 hours
    }
}
