import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Blocks from '@/content-blocks';
import { generateMetadataForPage } from '@/lib/helpers/generateMetadata';
import { getGeneralData } from '../api';
import { getCookiePage } from './api';

export const generateMetadata = async (): Promise<Metadata> => {
  const { generalData } = await getGeneralData();
  const { cookiePolicyPage } = await getCookiePage();
  if (!cookiePolicyPage || !generalData) return {};

  const metadata = generateMetadataForPage(
    cookiePolicyPage.data.attributes.pageMeta,
    generalData.data.attributes,
  );

  return { ...metadata };
};

const ContactPage = async (): Promise<JSX.Element> => {
  const { cookiePolicyPage } = await getCookiePage();

  if (!cookiePolicyPage) notFound();

  return (
    <>
      <Blocks content={cookiePolicyPage.data.attributes.blocks} />
    </>
  );
};

export default ContactPage;
