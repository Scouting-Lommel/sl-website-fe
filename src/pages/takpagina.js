import Head from 'next/head'
import LeaderCard from '../components/organisms/LeaderCard';
import Layout from './styles/Layout';
import TakInfo from '../components/organisms/takInfo';
import TakFiles from '../components/organisms/takFiles';
import Activiteiten from '../components/organisms/activiteiten';

export default function Takpagina({data}, {tak}) {
    return (
        <Layout>
            <Head>
                <title>{tak}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='py-4'>
            <LeaderCard persons={data.leaders}></LeaderCard>
            </div>
            <div className='grid grid-cols-2 gap-2 py-4'>
                <TakInfo info={data.info}></TakInfo>
                <TakFiles files={data.files}></TakFiles>
            </div>
            <div className='py-4'>
            <Activiteiten acts={data.activities}></Activiteiten>
            </div>
        </Layout>
    );
}    