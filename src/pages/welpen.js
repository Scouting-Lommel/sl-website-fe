import Head from 'next/head'
import LeaderCard from '../components/organisms/LeaderCard';
import Layout from './styles/Layout';
import TakInfo from '../components/organisms/takInfo';
import TakFiles from '../components/organisms/takFiles';
import Activiteiten from '../components/organisms/activiteiten';

export default function Welpen() {
    let leaders = ["a", "b", "c", "d", "e"];
    let info = "Info over deze tak blablablatttttttttttttttttttttttttttttttt ttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt";
    let files = "filenamen enzo dingen";
    let acts = [{date:"morgen", info:"die activiteit dinges"}, {date:"andere keer", info:"Ja nog zo een activiteit dinges"}];
    return (
        <Layout>
            <Head>
                <title>Welpen</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='py-4'>
            <LeaderCard persons={leaders}></LeaderCard>
            </div>
            <div className='grid grid-cols-2 gap-2 py-4'>
                <TakInfo info={info}></TakInfo>
                <TakFiles files={files}></TakFiles>
            </div>
            <div className='py-4'>
            <Activiteiten acts={acts}></Activiteiten>
            </div>
        </Layout>
    );
}    