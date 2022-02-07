import { getTakPageInfo } from '../../strapi/queries';
import Head from 'next/head'
import Layout from '../styles/Layout'
import { ApolloClient, InMemoryCache} from "@apollo/client";
import TakPage from '../../components/organisms/TakPage';

export default function givers({fin}) {
    
    return (
        <Layout>
            <Head>
                <title>Givers</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TakPage fin={fin} />
        </Layout>
    );
}    

export async function getStaticProps() {
    const client = new ApolloClient({
        uri:`${process.env.REACT_APP_BACKEND_URL}/graphql`,
        cache: new InMemoryCache()
    })
  
    const { data } = await client.query({
        query: getTakPageInfo("Givers")
    })
  
    let fin = data
  
    return {
        props: {fin},
        revalidate: 3600 // should update more often than other pages, so every hour
    }
  }