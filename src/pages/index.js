import client from '@/lib/api/apollo/client';
import { getHomePage } from '@/lib/api/home';
import { getGeneralData } from '@/lib/api/general';
import BaseLayout from '@/layouts/base';
import Blocks from '@/contentBlocks';

export default function Home({ data, general }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: general?.generalData.data.attributes.siteName,
    email: 'info@scoutinglommel.be',
    logo: general?.generalData.data.attributes.logo?.data?.attributes?.url,
    image: general?.generalData.data.attributes.image?.data?.attributes?.url,
    description: general?.generalData.data.attributes.siteDescription,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Nieuwe Kopen 4',
      addressLocality: 'Lommel',
      postalCode: '3920',
      addressCountry: 'Belgium',
    },
    url: general?.generalData.data.attributes.url,
  };

  return (
    <BaseLayout pageMeta={data.pageMeta} structuredData={structuredData}>
      <Blocks content={data.blocks} />
    </BaseLayout>
  );
}

export async function getStaticProps() {
  const notFound = { notFound: true };

  const general = await client.query({
    query: getGeneralData(),
  });
  const homePage = await client.query({
    query: getHomePage(),
  });

  if (!homePage?.data?.homePage || !general?.data?.generalData) {
    return notFound;
  }

  return {
    props: {
      data: homePage.data.homePage.data.attributes,
      general: general.data,
    },
  };
}
