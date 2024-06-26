import { notFound } from 'next/navigation';
import { generateMetadataForPage } from '@/lib/helpers/generateMetadata';
import Blocks from '@/content-blocks';
import { getGeneralData } from '../api';
import { getPrivacyPage } from './api';

export async function generateMetadata() {
  const { generalData } = await getGeneralData();
  const { privacyPolicyPage } = await getPrivacyPage();
  if (!privacyPolicyPage || !generalData) return {};

  const metadata = generateMetadataForPage(
    privacyPolicyPage.data.attributes.pageMeta,
    generalData.data.attributes,
  );

  return { ...metadata };
}

const ContactPage = async () => {
  const { privacyPolicyPage } = await getPrivacyPage();

  if (!privacyPolicyPage) notFound();

  return (
    <>
      <Blocks content={privacyPolicyPage.data.attributes.blocks} />
    </>
  );
};

export default ContactPage;
