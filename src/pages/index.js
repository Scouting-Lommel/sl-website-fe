import Head from 'next/head'
import Layout from './styles/Layout'
import client from '../lib/api/apollo/client'
import { getHomePage } from '../lib/api/home/queries';
import { getGeneralData } from "../lib/api/general/queries";
import { Hero } from '../components/organisms/Hero';
import { CallToAction } from '../components/organisms/CallToAction';
import { ImageText } from '../components/organisms/ImageText';
import { Carousel } from '../components/organisms/Carousel';
import { Blog } from '../components/organisms/Blog';
import { Gallery } from '../components/organisms/Gallery';

export default function Home({fin, general}) {
  const Title = fin.Title
  const noIndex = fin.NoIndex
  const URL = fin.URL
  return (
    <Layout generalData={general}>
      <Head>
      </Head>
        {fin.HomePage.map((component) => {
          switch (component.__typename) {
            case "ComponentContentBlocksHero":
              <Hero info={component}/>
              break;
            case "ComponentContentBlocksCallToAction":
              <CallToAction info={component}/>
              break;
            case "ComponentContentBlocksImageText":
              <ImageText info={component}/>
              break;
            case "ComponentContentBlocksCarousel":
              <Carousel info={component}/>
              break;
            case "ComponentContentBlocksBlog":
              <Blog info={component}/>
              break;
            case "ComponentContentBlocksGallery":
              <Gallery info={component}/>
              break;
            default:
              break;
          }
        })}
        <script src="./TW-ELEMENTS-PATH/dist/js/index.min.js"></script>
    </Layout>
  )
}

function reRender(){
  fetch('/api/revalidateHome')
}

export async function getStaticProps() {

  const { data } = await client.query({
      query: getHomePage()
  })

  let fin = data.homePage.data.attributes

  const layoutData = await client.query({
    query: getGeneralData()
  })
  
  let general = layoutData.data.generalData.data.attributes.GeneralData

  return {
      props: {fin: fin, general: general},
      revalidate: 86400 // 60*60*24 = every 24 hours
  }
}
