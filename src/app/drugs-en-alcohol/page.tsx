import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generateMetadataForPage } from '@/lib/helpers/generateMetadata';
import Blocks from '@/content-blocks';
import { getGeneralData } from '../api';
import { getDAPage } from './api';

export async function generateMetadata(): Promise<Metadata> {
  const { generalData } = await getGeneralData();
  const { drugsAlcoholPolicyPage } = await getDAPage();
  if (!drugsAlcoholPolicyPage || !generalData) return {};

  const metadata = generateMetadataForPage(
    drugsAlcoholPolicyPage.data.attributes.pageMeta,
    generalData.data.attributes,
  );

  return { ...metadata };
}

const ContactPage = async () => {
  const { drugsAlcoholPolicyPage } = await getDAPage();

  if (!drugsAlcoholPolicyPage) notFound();

  return (
    <>
      <Blocks content={drugsAlcoholPolicyPage.data.attributes.blocks} />
    </>
  );
};

export default ContactPage;
