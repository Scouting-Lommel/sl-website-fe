import client from '@/lib/api/apollo/client';
import { getGeneralData } from '@/lib/api/general';
import { getRentalLocationPage } from '@/lib/api/rental';
import BaseLayout from '@/layouts/base';
import Blocks from '@/contentBlocks';

export default function group({ data, params }) {
  return (
    <BaseLayout pageMeta={data.pageMeta} path="verhuur" slug={params.slug}>
      <Blocks content={data.blocks} />
    </BaseLayout>
  );
}

export async function getServerSideProps({ params }) {
  const notFound = { notFound: true };

  const general = await client.query({
    query: getGeneralData(),
  });
  const rentalLocationPage = await client.query({
    query: getRentalLocationPage(),
    variables: { slug: params.slug },
  });

  if (!rentalLocationPage?.data?.rentalLocations || !general?.data?.generalData) {
    return notFound;
  }

  return {
    props: {
      data: rentalLocationPage.data.rentalLocations.data[0].attributes,
      general: general.data,
      params: params,
    },
  };
}
