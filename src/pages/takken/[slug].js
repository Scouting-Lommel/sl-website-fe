import client from '@/lib/api/apollo/client';
import { getGeneralData } from '@/lib/api/general';
import { getGroupPage } from '@/lib/api/groups';
import { getAllGroupSlugs } from '@/lib/api/groups';
import BaseLayout from '@/layouts/base';

export default function group({ data, params }) {
  console.log(data);

  return (
    <BaseLayout pageMeta={data.pageMeta} path="takken" slug={params?.slug}>
      <section className="sl-layout">{data.pageTitle}</section>
    </BaseLayout>
  );
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: getAllGroupSlugs(),
  });

  const paths = data?.groups?.data?.map((group) => {
    return {
      params: { slug: group.attributes.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const notFound = { notFound: true };
  const { params } = context;

  if (!params.slug) {
    return notFound;
  }

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
      general: general.data.generalData.data.attributes,
      params: params,
    },
  };
}
