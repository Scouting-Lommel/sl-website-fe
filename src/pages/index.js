import Script from "next/script";
import client from "@/lib/api/apollo/client";
import { getHomePage } from "@/lib/api/home/queries";
import { getGeneralData } from "@/lib/api/general/queries";
import BaseLayout from "@/layouts/Base";
import Hero from "@/components/organisms/Hero";
import CallToAction from "@/components/organisms/CallToAction";
import ImageText from "@/components/organisms/ImageText";
import ItemCarousel from "@/components/organisms/Carousel";
import Blog from "@/components/organisms/Blog";
import Gallery from "@/components/organisms/Gallery";
import Socials from "@/components/organisms/Socials";
import Blocks from "@/contentBlocks";

export default function Home({ fin, general }) {
  return (
    <BaseLayout
      generalData={general}
      title={fin.Title}
      noIndex={fin.NoIndex}
      url={fin.URL}
    >
      {fin.HomePage.map((component, i) => {
        switch (component.__typename) {
          case "ComponentContentBlocksHero":
            return <Hero info={component} key={"Home" + i} />;
          case "ComponentContentBlocksCallToAction":
            return <CallToAction info={component} key={"Home" + i} />;
          case "ComponentContentBlocksImageText":
            return <ImageText info={component} key={"Home" + i} />;
          case "ComponentContentBlocksCarousel":
            return <ItemCarousel info={component} key={"Home" + i} />;
          case "ComponentContentBlocksBlog":
            return <Blog info={component} key={"Home" + i} />;
          case "ComponentContentBlocksGallery":
            return <Gallery info={component} key={"Home" + i} />;
          case "ComponentGeneralSocials":
            return <Socials info={component} key={"Home" + i} />;
          default:
            break;
        }
      })}
      {/* <Script src="./TW-ELEMENTS-PATH/dist/js/index.min.js"></Script> */}
      <Blocks content={fin.HomePage} />
    </BaseLayout>
  );
}

function reRender() {
  fetch("/api/revalidateHome");
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: getHomePage(),
  });

  let fin = data.homePage.data.attributes;

  const layoutData = await client.query({
    query: getGeneralData(),
  });

  let general = layoutData.data.generalData.data.attributes.GeneralData;

  return {
    props: { fin: fin, general: general },
    revalidate: 86400, // 60*60*24 = every 24 hours
  };
}
