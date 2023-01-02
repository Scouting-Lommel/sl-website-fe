import client from "@/lib/api/apollo/client";
import { getGeneralData } from "@/lib/api/general/queries";
import getContactInfo from "@/lib/api/contact/queries";
import BaseLayout from "@/layouts/base";
import Blocks from "@/contentBlocks";

export default function contact({ fin, general }) {
  return (
    <BaseLayout
      generalData={general}
      title={fin.Title}
      noIndex={fin.NoIndex}
      url={fin.URL}
    >
      <Blocks content={fin.ContactPage} />
    </BaseLayout>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: getContactInfo(),
  });
  const layoutData = await client.query({
    query: getGeneralData(),
  });

  let general = layoutData.data.generalData.data.attributes.GeneralData;

  let fin = data.contactPage.data.attributes;

  return {
    props: { fin: fin, general: general },
    revalidate: 86400, // 60*60*24 = every 24 hours
  };
}
