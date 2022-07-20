import client from "@/lib/api/apollo/client";
import { getBookingPage, getCalendarDates } from "@/lib/api/booking/queries";
import { getGeneralData } from "@/lib/api/general/queries";
import BaseLayout from "@/Layouts/Base";
import { ImageText } from "@/components/organisms/ImageText";
import { CallToAction } from "@/components/organisms/CallToAction";
import { Calendar } from "@/components/organisms/Calendar";
import { TextSection } from "@/components/organisms/TextSection";
import { Gallery } from "@/components/organisms/Gallery";

export default function verhuur({ fin, general, calendarDates }) {
  return (
    <BaseLayout
      generalData={general}
      title={fin.Title}
      noIndex={fin.NoIndex}
      url={fin.URL}
    >
      {fin.BookingsPage.map((component, i) => {
        switch (component.__typename) {
          case "ComponentContentBlocksImageText":
            return <ImageText info={component} key={"verhuur" + i} />;
          case "ComponentContentBlocksCallToAction":
            return <CallToAction info={component} key={"verhuur" + i} />;
          case "ComponentContentBlocksCalendar":
            return (
              <Calendar
                info={component}
                calendarData={calendarDates}
                key={"verhuur" + i}
              />
            );
          case "ComponentContentBlocksTextSection":
            return <TextSection info={component} key={"verhuur" + i} />;
          case "ComponentContentBlocksGallery":
            return <Gallery info={component} key={"verhuur" + i} />;
          default:
            break;
        }
      })}
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
