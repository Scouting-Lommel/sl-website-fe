import { notFound } from 'next/navigation';
import { generateMetadataForPage } from '@/lib/helpers/metadata';
import Blocks from '@/content-blocks';
import { getGeneralData } from '../api';
import { getHomePage } from './api';

export async function generateMetadata() {
  const { generalData } = await getGeneralData();
  const { homePage } = await getHomePage();
  if (!homePage || !generalData) return {};

  const metadata = generateMetadataForPage(
    homePage.data.attributes.pageMeta,
    generalData.data.attributes,
  );

  return { ...metadata };
}

const HomePage = async () => {
  const { generalData } = await getGeneralData();
  const { homePage } = await getHomePage();

  if (!homePage) notFound();

  let structuredData = {};
  if (generalData.data) {
    structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: generalData.data.attributes.siteName,
      email: 'info@scoutinglommel.be',
      logo: generalData.data.attributes.logo?.data?.attributes?.url,
      image: generalData.data.attributes.image?.data?.attributes?.url,
      description: generalData.data.attributes.siteDescription,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Nieuwe Kopen 4',
        addressLocality: 'Lommel',
        postalCode: '3920',
        addressCountry: 'Belgium',
      },
      url: generalData.data.attributes.url,
    };
  }

  return (
    <>
      <Blocks content={homePage.data.attributes.blocks} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </>
  );
};

export default HomePage;
