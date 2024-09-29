import { notFound } from 'next/navigation';
import { generateMetadataForPage } from '@/lib/helpers/generateMetadata';
import Blocks from '@/content-blocks';
import { getGeneralData } from '../../api';
import { getRentalLocationPage, getRentalLocationBookings } from './api';

export async function generateMetadata({ params: { slug } }: { params: { slug: string } }) {
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
}

const RentalLocationPage = async ({ params: { slug } }: { params: { slug: string } }) => {
  const { rentalLocations } = await getRentalLocationPage(slug);
  const rentalLocation = rentalLocations.data[0];
  const { bookings } = await getRentalLocationBookings(slug);
  const bookingData = [];
  for (let i = 0; i < bookings.data.length; i++) {
    const booking = bookings.data[i];
    const bookingInfo = {
      id: booking.id,
      start: booking.attributes.start,
      end: booking.attributes.end,
      title: booking.attributes.title,
    };
    bookingData.push(bookingInfo);
  }

  if (!rentalLocation) notFound();

  for (let i = 0; i < rentalLocation.attributes.blocks.length; i++) {
    if (rentalLocation.attributes.blocks[i].__typename === 'ComponentContentBlocksCalendarBlock') {
      rentalLocation.attributes.blocks[i].calendarEvents = bookingData;
    }
  }

  return (
    <>
      <Blocks content={rentalLocation.attributes.blocks} />
    </>
  );
};

export default RentalLocationPage;
