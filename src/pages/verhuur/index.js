import client from '@/lib/api/apollo/client';
import { getRentalPageData } from '@/lib/api/rental';
import { getGeneralData } from '@/lib/api/general';
import BaseLayout from '@/layouts/base';
import Blocks from '@/content-blocks';

export default function Verhuur({ data, general }) {
  return (
    <BaseLayout pageMeta={data.pageMeta} slug="verhuur">
      <Blocks content={data.blocks} />
    </BaseLayout>
  );
}

export async function getStaticProps() {
  const notFound = { notFound: true };

  const general = await client.query({
    query: getGeneralData(),
  });
  const rentalPage = await client.query({
    query: getRentalPageData(),
  });

  if (!rentalPage?.data?.rentalPage || !general?.data?.generalData) {
    return notFound;
  }

  return {
    props: {
      data: rentalPage.data.rentalPage.data.attributes,
      general: general.data,
    },
  };
}
