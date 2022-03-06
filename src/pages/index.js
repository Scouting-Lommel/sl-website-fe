import Head from 'next/head'
import Layout from './styles/Layout'
import client from '../lib/api/apollo/client'
import { getHomePage } from '../lib/api/home/queries';

export default function Home({fin}) {
  const Title = fin.Title
  const noIndex = fin.NoIndex
  const URL = fin.URL
  return (
    <Layout>
      <Head>
      </Head>
        {fin.HomePage.map((component) => {
          switch (component.__typename) {
            case "ComponentContentBlocksHero":
              
              break;
            case "ComponentContentBlocksCallToAction":
            
              break;
            case "ComponentContentBlocksImageText":
          
              break;
            case "ComponentContentBlocksCarousel":
        
              break;
            case "ComponentContentBlocksBlog":
      
              break;
            case "ComponentContentBlocksGallery":
    
              break;
            default:
              break;
          }
        })}
        <script src="./TW-ELEMENTS-PATH/dist/js/index.min.js"></script>
    </Layout>
  )
}

export async function getStaticProps() {

  const { data } = await client.query({
      query: getHomePage()
  })

  let fin = data.homePage.data.attributes

  return {
      props: {fin},
      revalidate: 86400 // 60*60*24 = every 24 hours
  }
}
