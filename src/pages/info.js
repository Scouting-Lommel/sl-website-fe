import client from "@/lib/api/apollo/client";
import { getInfoPage } from "@/lib/api/info/queries";
import { getGeneralData } from "@/lib/api/general/queries";
import BaseLayout from "@/layouts/Base";
import ImageText from "@/components/organisms/ImageText";
import CallToAction from "@/components/organisms/CallToAction";
import { FAQ } from "@/components/organisms/FAQ";
import { Map } from "@/components/organisms/Map";
import Blocks from "@/contentBlocks";

export default function Info({ fin, general }) {
  return (
    <BaseLayout
      generalData={general}
      title={fin.Title}
      noIndex={fin.NoIndex}
      url={fin.URL}
    >
      <Blocks content={fin.InfoPage} />
    </BaseLayout>
  );
}

function reRender() {
  fetch("/api/revalidateInfo");
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: getInfoPage(),
  });
  const layoutData = await client.query({
    query: getGeneralData(),
  });

  let general = layoutData.data.generalData.data.attributes.GeneralData;

  let fin = data.infoPage.data.attributes;

  return {
    props: { fin: fin, general: general },
    revalidate: 86400, // 60*60*24 = every 24 hours
  };
}
