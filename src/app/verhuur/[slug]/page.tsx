import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Blocks from '@/content-blocks';
import { generateMetadataForPage } from '@/lib/helpers/generateMetadata';
import { getRentalLocationPage } from './api';
import { getGeneralData } from '../../api';

type Props = { params: { slug: string } };

export const generateMetadata = async ({ params: { slug } }: Props): Promise<Metadata> => {
  const { generalData } = await getGeneralData();
  const { rentalLocations } = await getRentalLocationPage(slug);
  const rentalLocation = rentalLocations.data[0];

  if (!rentalLocation || !generalData) return {};

  const metadata = generateMetadataForPage(
    rentalLocation.attributes.pageMeta,
    generalData.data.attributes,
    'verhuur',
  );

  return { ...metadata };
};

const RentalLocationPage = async ({ params: { slug } }: Props): Promise<JSX.Element> => {
  const { rentalLocations } = await getRentalLocationPage(slug);
  const rentalLocation = rentalLocations.data[0];

  if (!rentalLocation) notFound();

  return (
    <>
      <Blocks content={rentalLocation.attributes.blocks} />
    </>
  );
};

export default RentalLocationPage;
