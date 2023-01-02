import client from "@/lib/api/apollo/client";
import { getHomePage } from "@/lib/api/home/queries";
import { getGeneralData } from "@/lib/api/general/queries";
import BaseLayout from "@/layouts/base";
import Blocks from "@/contentBlocks";

export default function Home({ data, general }) {
  console.log(data);
  console.log(general);

  return (
    <BaseLayout pageMeta={data.pageMeta} generalData={general}>
      <Blocks content={data.blocks} />
    </BaseLayout>
  );
}

// function reRender() {
//   fetch("/api/revalidateHome");
// }

export async function getStaticProps() {
  const notFound = { notFound: true };

  const general = await client.query({
    query: getGeneralData(),
  });
  const homePage = await client.query({
    query: getHomePage(),
  });

  if (!homePage?.data?.homePage || !general?.data?.generalData) {
    return notFound;
  }

  return {
    props: {
      data: homePage.data.homePage.data.attributes,
      general: general.data.generalData.data.attributes,
    },
    // revalidate: 86400, // 60*60*24 = every 24 hours
  };
}
