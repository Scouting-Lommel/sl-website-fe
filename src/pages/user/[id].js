import Head from 'next/head'
import Layout from '../styles/Layout'
import client from '../../lib/api/apollo/client' 
import { getAllUserIds, getTakPageLargeLeader } from '../../lib/api/user/queries'

export default function user({fin}) {
    console.log(fin.leaders.data[0].attributes)
  return (
    <></>
  )
}

export const getStaticPaths = async () => {
    // const { data } = await client.query({
    //     query: getAllUserIds()
    // })

    // const paths = data.leaders.data.map(user => {
    //     return {
    //         params: { id: user.id }
    //     }
    // })
    const paths = []
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
