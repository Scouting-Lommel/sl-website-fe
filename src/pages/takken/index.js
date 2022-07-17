import client from "@/lib/api/apollo/client";
import { getGroupsPage } from "@/lib/api/groups/queries";
import { getGeneralData } from "@/lib/api/general/queries";
import Layout from "@/pages/styles/Layout";
import { ImageText } from "@/organisms/ImageText";
import { CallToAction } from "@/organisms/CallToAction";
import { ItemCarousel } from "@/organisms/Carousel";

export default function takken({ fin, general }) {
  return (
    <Layout
      generalData={general}
      title={fin.Title}
      url={fin.URL}
      noIndex={fin.NoIndex}
    >
      {fin.GroupsPage.map((component, i) => {
        switch (component.__typename) {
          case "ComponentContentBlocksImageText":
            return <ImageText info={component} key={"Takken" + i} />;
          case "ComponentContentBlocksCallToAction":
            return <CallToAction info={component} key={"Takken" + i} />;
          case "ComponentContentBlocksCarousel":
            return <ItemCarousel info={component} key={"Takken" + i} />;
          default:
            break;
        }
      })}
    </Layout>
  );
}

function reRender() {
  fetch("/api/groups/revalidateGroups");
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: getGroupsPage(),
  });
  const layoutData = await client.query({
    query: getGeneralData(),
  });

  let general = layoutData.data.generalData.data.attributes.GeneralData;

  let fin = data.groupsPage.data.attributes;

  return {
    props: { fin: fin, general: general },
    revalidate: 86400, // 60*60*24 = every 24 hours
  };
}
