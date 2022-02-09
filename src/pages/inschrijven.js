import Head from 'next/head'
import Layout from './styles/Layout'

export default function inschrijven({fin}) {
  return (
    <Layout>
        <Head>
            <title>Scouting Lommel</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
            schrijf u in:
        </div>
    </Layout>
  )
}

