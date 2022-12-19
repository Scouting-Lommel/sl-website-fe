import client from "@/lib/api/apollo/client";
import { getHomePage } from "@/lib/api/home/queries";
import { getGeneralData } from "@/lib/api/general/queries";
import BaseLayout from "@/layouts/Base";
import Blocks from "@/contentBlocks";

export default function Home({ data }) {
  console.log(data);

  return (
    <>Home</>
    // <BaseLayout
    //   generalData={general}
    //   title={fin.Title}
    //   noIndex={fin.NoIndex}
    //   url={fin.URL}
    // >
    //   <Blocks content={fin.HomePage} />
    // </BaseLayout>
  );
}

// function reRender() {
//   fetch("/api/revalidateHome");
// }

export async function getStaticProps() {
  const { data } = await client.query({
    query: getHomePage(),
  });

  // let fin = data.homePage.data.attributes;

  // const layoutData = await client.query({
  //   query: getGeneralData(),
  // });

  // let general = layoutData.data.generalData.data.attributes.GeneralData;

  return {
    props: { data: data.homePage.data.attributes },
    revalidate: 86400, // 60*60*24 = every 24 hours
  };
}
