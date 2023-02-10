import client from "@/lib/api/apollo/client";
import { getGeneralData } from "@/lib/api/general";
import { getRentalLocationPage } from "@/lib/api/rental";
import { getAllRentalLocationSlugs } from "@/lib/api/rental";
import BaseLayout from "@/layouts/base";

export default function group({ data, params }) {
  console.log(data);

  return (
    <BaseLayout pageMeta={data.pageMeta} path="verhuur" slug={params.slug}>
      <section className="sl-layout">{data.pageTitle}</section>
    </BaseLayout>
  );
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: getAllRentalLocationSlugs(),
  });

  const paths = data.rentalLocations.data.map((rentalLocation) => {
    return {
      params: { slug: rentalLocation.attributes.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const notFound = { notFound: true };
  const { params } = context;

  const general = await client.query({
    query: getGeneralData(),
  });
  const rentalLocationPage = await client.query({
    query: getRentalLocationPage(),
    variables: { slug: params.slug },
  });

  if (
    !rentalLocationPage?.data?.rentalLocations ||
    !general?.data?.generalData
  ) {
    return notFound;
  }

  return {
    props: {
      data: rentalLocationPage.data.rentalLocations.data[0].attributes,
      general: general.data.generalData.data.attributes,
      params: params,
    },
  };
}
