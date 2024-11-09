import { notFound } from 'next/navigation';
import { generateMetadataForPage } from '@/lib/helpers/generateMetadata';
import Blocks from '@/content-blocks';
import { getGeneralData } from '../api';
import { getCookiePage } from './api';

export async function generateMetadata() {
  const { generalData } = await getGeneralData();
  const { cookiePolicyPage } = await getCookiePage();
  if (!cookiePolicyPage || !generalData) return {};

  const metadata = generateMetadataForPage(
    cookiePolicyPage.data.attributes.pageMeta,
    generalData.data.attributes,
  );

  return { ...metadata };
}

const ContactPage = async () => {
  const { cookiePolicyPage } = await getCookiePage();

  if (!cookiePolicyPage) notFound();

  return (
    <>
      <Blocks content={cookiePolicyPage.data.attributes.blocks} />
    </>
  );
};

export default ContactPage;
