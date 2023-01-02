import client from "@/lib/api/apollo/client";
import { getHomePage } from "@/lib/api/home/queries";
import { getGeneralData } from "@/lib/api/general/queries";
import BaseLayout from "@/layouts/base";
import Blocks from "@/contentBlocks";

export default function Home({ data }) {
  console.log(data);

  return (
    <BaseLayout pageMeta={data.pageMeta}>
      <Blocks content={data.blocks} />
    </BaseLayout>
  );
}

// function reRender() {
//   fetch("/api/revalidateHome");
// }

export async function getStaticProps() {
  const notFound = { notFound: true };

  const { data } = await client.query({
    query: getHomePage(),
  });

  if (!data.homePage) {
    return notFound;
  }

  // const layoutData = await client.query({
  //   query: getGeneralData(),
  // });

  // let general = layoutData.data.generalData.data.attributes.GeneralData;

  return {
    props: { data: data.homePage.data.attributes },
    // revalidate: 86400, // 60*60*24 = every 24 hours
  };
}
