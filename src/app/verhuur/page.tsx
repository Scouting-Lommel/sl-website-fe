import { notFound } from 'next/navigation';
import { generateMetadataForPage } from '@/lib/helpers/generateMetadata';
import Blocks from '@/content-blocks';
import { getGeneralData } from '../api';
import { getRentalPage } from './api';

export async function generateMetadata() {
  const { generalData } = await getGeneralData();
  const { rentalPage } = await getRentalPage();
  if (!rentalPage || !generalData) return {};

  const metadata = generateMetadataForPage(
    rentalPage.data.attributes.pageMeta,
    generalData.data.attributes,
  );

  return { ...metadata };
}

const RentalPage = async () => {
  const { rentalPage } = await getRentalPage();

  if (!rentalPage) notFound();

  return (
    <>
      <Blocks content={rentalPage.data.attributes.blocks} />
    </>
  );
};

export default RentalPage;
