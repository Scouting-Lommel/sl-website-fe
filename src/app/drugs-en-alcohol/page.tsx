import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generateMetadataForPage } from '@/lib/helpers/generateMetadata';
import Blocks from '@/content-blocks';
import { getGeneralData } from '../api';
import { getDAPage } from './api';

export const generateMetadata = async (): Promise<Metadata> => {
  const { generalData } = await getGeneralData();
  const { drugsAlcoholPolicyPage } = await getDAPage();
  if (!drugsAlcoholPolicyPage || !generalData) return {};

  const metadata = generateMetadataForPage(
    drugsAlcoholPolicyPage.data.attributes.pageMeta,
    generalData.data.attributes,
  );

  return { ...metadata };
};

const ContactPage = async (): Promise<JSX.Element> => {
  const { drugsAlcoholPolicyPage } = await getDAPage();

  if (!drugsAlcoholPolicyPage) notFound();

  return (
    <>
      <Blocks content={drugsAlcoholPolicyPage.data.attributes.blocks} />
    </>
  );
};

export default ContactPage;
