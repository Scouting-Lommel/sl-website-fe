import Head from 'next/head'
import LeaderCard from '../components/organisms/LeaderCard';
import Layout from './styles/Layout';

export default function Welpen() {
    let leaders = ["a", "b", "c", "d", "e"];
    return (
        <Layout>
            <Head>
                <title>Welpen</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <LeaderCard persons={leaders}></LeaderCard>
        </Layout>
    );
}    