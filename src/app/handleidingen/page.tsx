import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generateMetadataForPage } from '@/lib/helpers/generateMetadata';
import Blocks from '@/content-blocks';
import { getGeneralData } from '../api';
import { getManualsPage } from './api';

export const generateMetadata = async (): Promise<Metadata> => {
  const { generalData } = await getGeneralData();
  const { manualsOverviewPage } = await getManualsPage();

  if (!manualsOverviewPage?.data || !generalData) return {};

  const metadata = generateMetadataForPage(
    manualsOverviewPage.data.attributes.pageMeta,
    generalData.data.attributes,
  );

  return { ...metadata };
};

const ManualsPage = async (): Promise<JSX.Element> => {
  const { manualsOverviewPage } = await getManualsPage();

  if (!manualsOverviewPage?.data) notFound();

  console.log(manualsOverviewPage.data.attributes);

  return (
    <>
      <Blocks content={manualsOverviewPage.data.attributes.blocks} />
    </>
  );
};

export default ManualsPage;
