import client from "@/lib/api/apollo/client";
import { getInfoPage } from "@/lib/api/info";
import { getGeneralData } from "@/lib/api/general";
import BaseLayout from "@/layouts/base";

export default function Info({ data, general }) {
  console.log(data);

  return (
    <BaseLayout pageMeta={data.pageMeta} slug="algemene-informatie">
      <section className="sl-layout">{data.pageMeta.pageTitle}</section>
    </BaseLayout>
  );
}

export async function getStaticProps() {
  const notFound = { notFound: true };

  const general = await client.query({
    query: getGeneralData(),
  });
  const infoPage = await client.query({
    query: getInfoPage(),
  });

  if (!infoPage?.data?.infoPage || !general?.data?.generalData) {
    return notFound;
  }

  return {
    props: {
      data: infoPage.data.infoPage.data.attributes,
      general: general.data.generalData.data.attributes,
    },
  };
}
