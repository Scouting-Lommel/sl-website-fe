import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generateMetadataForPage } from '@/lib/helpers/generateMetadata';
import CalendarRevalidator from '@/components/molecules/CalendarRevalidator';
import { getGeneralData } from '../../../api';
import { getRentalLocationPage } from '../api';

type Props = { params: { slug: string; key: string } };

export async function generateMetadata({ params: { slug } }: Props): Promise<Metadata> {
  const { generalData } = await getGeneralData();
  const { rentalLocations } = await getRentalLocationPage(slug);
  const rentalLocation = rentalLocations.data[0];

  if (!rentalLocation || !generalData) return {};

  const metadata = generateMetadataForPage(
    rentalLocation.attributes.pageMeta,
    generalData.data.attributes,
    'verhuur/verhuursettings/revalidate',
  );

  return { ...metadata };
}

const RentalLocationPage = async ({
  params: { slug, key },
}: {
  params: { slug: string; key: string };
}) => {
  if (slug != 'settings' || key != 'revalidate') notFound();

  return (
    <>
      <CalendarRevalidator />
    </>
  );
};

export default RentalLocationPage;
