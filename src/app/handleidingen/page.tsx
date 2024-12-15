import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generateMetadataForPage } from '@/lib/helpers/generateMetadata';
import Blocks from '@/content-blocks';
import ManualCards from '@/components/organisms/ManualCards';
import { getGeneralData } from '../api';
import { getManuals, getManualsPage } from './api';

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
  const { manuals } = await getManuals();

  if (!manualsOverviewPage?.data) notFound();

  return (
    <>
      <Blocks content={manualsOverviewPage.data.attributes.blocks} />
      <ManualCards
        manualCards={manuals?.data?.map((manual: any) => ({
          id: manual.id,
          ...manual.attributes,
        }))}
      />
    </>
  );
};

export default ManualsPage;
