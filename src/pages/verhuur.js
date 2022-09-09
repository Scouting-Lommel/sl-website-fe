import client from "@/lib/api/apollo/client";
import { getBookingPage, getCalendarDates } from "@/lib/api/booking/queries";
import { getGeneralData } from "@/lib/api/general/queries";
import BaseLayout from "@/layouts/Base";
import Blocks from "@/contentBlocks";

export default function verhuur({ fin, general, calendarDates }) {
  return (
    <BaseLayout
      generalData={general}
      title={fin.Title}
      noIndex={fin.NoIndex}
      url={fin.URL}
    >
      <Blocks content={fin.BookingsPage} data={{ calendarDates }} />
    </BaseLayout>
  );
}

function reRender() {
  fetch("/api/revalidateVerhuur");
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: getBookingPage(),
  });
  const layoutData = await client.query({
    query: getGeneralData(),
  });
  let datesList = [];
  let response = ["none"];
  let index = 1;
  while (index <= 10) {
    // set to response.length > 0
    let calenderData = await client.query({
      query: getCalendarDates(index++),
    });
    response = calenderData.data.rentedDates.data;
    datesList = datesList.concat(response);
  }

  let general = layoutData.data.generalData.data.attributes.GeneralData;
  let fin = data.bookingsPage.data.attributes;

  return {
    props: { fin: fin, general: general, calendarDates: datesList },
    revalidate: 86400, // 60*60*24 = every 24 hours
  };
}
