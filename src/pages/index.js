import Head from 'next/head'
import Link from 'next/link'
import Layout from './styles/Layout'

export default function Home() {
  return (
    <Layout>
        <Head>
            <title>Scouting Lommel</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Link href="/welpen">
          <a>Welpen pagina test</a>
        </Link>
    </Layout>
  )
}
