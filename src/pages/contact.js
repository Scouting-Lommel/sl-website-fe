import Head from 'next/head'
import Layout from './styles/Layout'

export default function contact({fin}) {
  return (
    <Layout>
        <Head>
          <title>{fin.Title}</title>
          {fin.NoIndex && <meta name="googlebot" content="noindex"/>}
        </Head>
        <div>
            Neem contact met ons op:
        </div>

    </Layout>
  )
}

