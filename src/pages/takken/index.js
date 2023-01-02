import client from "@/lib/api/apollo/client";
import { getGroupsPage } from "@/lib/api/groups/queries";
import { getGeneralData } from "@/lib/api/general/queries";
import BaseLayout from "@/layouts/base";
import Blocks from "@/contentBlocks";

export default function takken({ fin, general }) {
  return (
    <BaseLayout
      generalData={general}
      title={fin.Title}
      url={fin.URL}
      noIndex={fin.NoIndex}
    >
      <Blocks content={fin.GroupsPage} />
    </BaseLayout>
  );
}

function reRender() {
  fetch("/api/groups/revalidateGroups");
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: getGroupsPage(),
  });
  const layoutData = await client.query({
    query: getGeneralData(),
  });

  let general = layoutData.data.generalData.data.attributes.GeneralData;

  let fin = data.groupsPage.data.attributes;

  return {
    props: { fin: fin, general: general },
    revalidate: 86400, // 60*60*24 = every 24 hours
  };
}
