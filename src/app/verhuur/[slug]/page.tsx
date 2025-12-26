import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { JSX } from 'react';
import { generateMetadataForPage } from '@/lib/helpers/generateMetadata';
import Blocks from '@/content-blocks';
import { getRentalLocationPage } from './api';
import { getGeneralData } from '../../api';

type Props = { params: Promise<{ slug: string }> };

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const { slug } = await props.params;

  const { generalData } = await getGeneralData();
  const { rentalLocations } = await getRentalLocationPage(slug);
  const rentalLocation = rentalLocations.data[0];

  if (!rentalLocation || !generalData) return {};

  const metadata = await generateMetadataForPage(
    rentalLocation.attributes.pageMeta,
    generalData.data.attributes,
    'verhuur',
  );

  return { ...metadata };
};

const RentalLocationPage = async (props: Props): Promise<JSX.Element> => {
  const { slug } = await props.params;

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
