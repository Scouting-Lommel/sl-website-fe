import client from '@/lib/api/apollo/client';
import { getGroupsPage } from '@/lib/api/groups';
import { getGeneralData } from '@/lib/api/general';
import BaseLayout from '@/layouts/base';

export default function takken({ data, general }) {
  console.log(data);
  console.log(general);

  return (
    <BaseLayout pageMeta={data.pageMeta} slug="takken">
      <section className="sl-layout">{data.pageMeta.pageTitle}</section>
    </BaseLayout>
  );
}

export async function getStaticProps() {
  const notFound = { notFound: true };

  const general = await client.query({
    query: getGeneralData(),
  });
  const groupsPage = await client.query({
    query: getGroupsPage(),
  });

  if (!groupsPage?.data?.groupsPage || !general?.data?.generalData) {
    return notFound;
  }

  return {
    props: {
      data: groupsPage.data.groupsPage.data.attributes,
      general: general.data.generalData.data.attributes,
    },
  };
}
