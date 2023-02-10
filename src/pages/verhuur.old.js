import client from '@/lib/api/apollo/client';
// import { getBookingPage, getCalendarDates } from "@/lib/api/booking/";
import { getGeneralData } from '@/lib/api/general/';
import BaseLayout from '@/layouts/base';
// import Blocks from "@/contentBlocks";

export default function verhuur({ fin, general, calendarDates }) {
  return (
    // <BaseLayout
    //   generalData={general}
    //   title={fin.Title}
    //   noIndex={fin.NoIndex}
    //   url={fin.URL}
    // >
    //   <Blocks content={fin.BookingsPage} data={{ calendarDates }} />
    // </BaseLayout>
    <BaseLayout generalData={general} title="Leiding" url="" noIndex={true}>
      Verhuur old
    </BaseLayout>
  );
}

// function reRender() {
//   fetch("/api/revalidateVerhuur");
// }

export async function getStaticProps() {
  // const { data } = await client.query({
  //   query: getBookingPage(),
  // });
  const general = await client.query({
    query: getGeneralData(),
  });
  // let datesList = [];
  // let response = ["none"];
  // let index = 1;
  // while (index <= 10) {
  //   // set to response.length > 0
  //   let calenderData = await client.query({
  //     query: getCalendarDates(index++),
  //   });
  //   response = calenderData.data.rentedDates.data;
  //   datesList = datesList.concat(response);
  // }

  // let general = layoutData.data.generalData.data.attributes.GeneralData;
  // let fin = data.bookingsPage.data.attributes;

  return {
    // props: { fin: fin, general: general, calendarDates: datesList },
    props: { general: general.data.generalData.data.attributes },
    revalidate: 86400, // 60*60*24 = every 24 hours
  };
}
