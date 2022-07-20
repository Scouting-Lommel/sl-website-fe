import client from "@/lib/api/apollo/client";
import { getInfoPage } from "@/lib/api/info/queries";
import { getGeneralData } from "@/lib/api/general/queries";
import BaseLayout from "@/Layouts/Base";
import { ImageText } from "@/components/organisms/ImageText";
import { CallToAction } from "@/components/organisms/CallToAction";
import { FAQ } from "@/components/organisms/FAQ";
import { Map } from "@/components/organisms/Map";

export default function Info({ fin, general }) {
  return (
    <BaseLayout
      generalData={general}
      title={fin.Title}
      noIndex={fin.NoIndex}
      url={fin.URL}
    >
      {fin.InfoPage.map((component, i) => {
        switch (component.__typename) {
          case "ComponentContentBlocksImageText":
            return <ImageText info={component} key={"info" + i} />;
          case "ComponentContentBlocksCallToAction":
            return <CallToAction info={component} key={"info" + i} />;
          case "ComponentContentBlocksFaq":
            return <FAQ info={component} key={"info" + i} />;
          case "ComponentContentBlocksMap":
            return <Map info={component} key={"info" + i} />;
          default:
            break;
        }
      })}
    </BaseLayout>
  );
}

function reRender() {
  fetch("/api/revalidateInfo");
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: getInfoPage(),
  });
  const layoutData = await client.query({
    query: getGeneralData(),
  });

  let general = layoutData.data.generalData.data.attributes.GeneralData;

  let fin = data.infoPage.data.attributes;

  return {
    props: { fin: fin, general: general },
    revalidate: 86400, // 60*60*24 = every 24 hours
  };
}
