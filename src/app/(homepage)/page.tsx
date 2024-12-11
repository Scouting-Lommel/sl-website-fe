import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Blocks from '@/content-blocks';
import { generateMetadataForPage } from '@/lib/helpers/generateMetadata';
import { generateStructuredData } from '@/lib/helpers/generateStructuredData';
import { getGeneralData } from '../api';
import { getHomePage } from './api';

export const generateMetadata = async (): Promise<Metadata> => {
  const { generalData } = await getGeneralData();
  const { homePage } = await getHomePage();
  if (!homePage || !generalData) return {};

  const metadata = generateMetadataForPage(
    homePage.data.attributes.pageMeta,
    generalData.data.attributes,
  );

  return { ...metadata };
};

const HomePage = async (): Promise<JSX.Element> => {
  const { generalData } = await getGeneralData();
  const { homePage } = await getHomePage();

  if (!homePage) notFound();

  return (
    <>
      <Blocks content={homePage.data.attributes.blocks} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateStructuredData(generalData?.data?.attributes)),
        }}
      />
    </>
  );
};

export default HomePage;
