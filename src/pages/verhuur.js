import Layout from "./styles/Layout";
import Head from 'next/head'
import client from '../lib/api/apollo/client'
import { getBookingPage } from "../lib/api/booking/queries";

export default function takken({fin}){
    return (<Layout>
        <Head>
        </Head>
    </Layout>)
}

export async function getStaticProps() {
  
    const { data } = await client.query({
        query: getBookingPage()
    })
  
    let fin = data.bookingsPage.data.attributes.BookingsPage
  
    return {
        props: {fin},
        revalidate: 86400 // 60*60*24 = every 24 hours
    }
  }