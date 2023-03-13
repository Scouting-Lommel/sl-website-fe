import client from '@/lib/api/apollo/client';
import { getGeneralData } from '@/lib/api/general';
import { getGroupPage } from '@/lib/api/groups';
import BaseLayout from '@/layouts/base';
import Blocks from '@/contentBlocks';

export default function group({ data, params }) {
  return (
    <BaseLayout pageMeta={data.pageMeta} path="takken" slug={params.slug}>
      <Blocks content={data.blocks} />
    </BaseLayout>
  );
}

export async function getServerSideProps({ params }) {
  const notFound = { notFound: true };

  const general = await client.query({
    query: getGeneralData(),
  });
  const groupPage = await client.query({
    query: getGroupPage(),
    variables: { slug: params.slug },
  });

  if (!groupPage?.data?.groups || !general?.data?.generalData) {
    return notFound;
  }

  return {
    props: {
      data: groupPage.data.groups.data[0].attributes,
      general: general.data,
      params: params,
    },
  };
}
