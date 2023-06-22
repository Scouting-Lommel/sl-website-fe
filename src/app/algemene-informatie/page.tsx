import { notFound } from 'next/navigation';
import { generateMetadataForPage } from '@/lib/helpers/metadata';
import Blocks from '@/content-blocks';
import { getGeneralData } from '../api';
import { getInfoPage } from './api';

export async function generateMetadata() {
  const { generalData } = await getGeneralData();
  const { infoPage } = await getInfoPage();
  if (!infoPage || !generalData) return {};

  const metadata = generateMetadataForPage(
    infoPage.data.attributes.pageMeta,
    generalData.data.attributes,
  );

  return { ...metadata };
}

const InfoPage = async () => {
  const { infoPage } = await getInfoPage();

  if (!infoPage) notFound();

  return (
    <>
      <Blocks content={infoPage.data.attributes.blocks} />
    </>
  );
};

export default InfoPage;
