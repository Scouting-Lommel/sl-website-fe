import client from '@/lib/api/apollo/client';
import { getGeneralData } from '@/lib/api/general';
import { getContactPage } from '@/lib/api/contact';
import BaseLayout from '@/layouts/base';
import Blocks from '@/contentBlocks';

export default function contact({ data, general }) {
  return (
    <BaseLayout pageMeta={data.pageMeta} slug="contact">
      <Blocks content={data.blocks} />
    </BaseLayout>
  );
}

export async function getStaticProps() {
  const notFound = { notFound: true };

  const general = await client.query({
    query: getGeneralData(),
  });
  const contactPage = await client.query({
    query: getContactPage(),
  });

  if (!contactPage?.data?.contactPage || !general?.data?.generalData) {
    return notFound;
  }

  return {
    props: {
      data: contactPage.data.contactPage.data.attributes,
      general: general.data,
    },
  };
}
