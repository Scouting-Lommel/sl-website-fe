import client from '@/lib/api/apollo/client';
import { getGroupsPage } from '@/lib/api/groups';
import { getGeneralData } from '@/lib/api/general';
import BaseLayout from '@/layouts/base';
import Blocks from '@/content-blocks';

export default function takken({ data, general }) {
  return (
    <BaseLayout pageMeta={data.pageMeta} slug="takken">
      <Blocks content={data.blocks} />
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
      general: general.data,
    },
  };
}
