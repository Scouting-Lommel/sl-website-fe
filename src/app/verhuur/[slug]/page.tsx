import { notFound } from 'next/navigation';
import { generateMetadataForPage } from '@/lib/helpers/metadata';
import Blocks from '@/content-blocks';
import HeroBlock from '@/content-blocks/HeroBlock';
import { getGeneralData } from '../../api';
import { getRentalLocationPage } from './api';

export async function generateMetadata({ params: { slug } }: { params: { slug: string } }) {
  const { generalData } = await getGeneralData();
  const { rentalLocations } = await getRentalLocationPage(slug);
  const rentalLocation = rentalLocations.data[0];

  if (!rentalLocation || !generalData) return {};

  const metadata = generateMetadataForPage(
    rentalLocation.attributes.pageMeta,
    generalData.data.attributes,
    'takken',
  );

  return { ...metadata };
}

const RentalLocationPage = async ({ params: { slug } }: { params: { slug: string } }) => {
  const { rentalLocations } = await getRentalLocationPage(slug);
  const rentalLocation = rentalLocations.data[0];

  if (!rentalLocation) notFound();

  return (
    <>
      <HeroBlock
        title={rentalLocation.attributes.pageTitle}
        subtitle={rentalLocation.attributes.description}
        variant="default"
      />
      <Blocks content={rentalLocation.attributes.blocks} />
    </>
  );
};

export default RentalLocationPage;
