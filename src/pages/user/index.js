import client from "@/lib/api/apollo/client";
import { getGroupLeaders } from "@/lib/api/groups/queries";
import { getGeneralData } from "@/lib/api/general/queries";
import BaseLayout from "@/Layouts/Base";
import { ItemCarousel } from "@/components/organisms/Carousel";

export default function leaders({ fin, general, leaderList }) {
  return (
    <BaseLayout generalData={general} title="Leiding" url="" noIndex={true}>
      {leaderList.map((component, i) => {
        return (
          <ItemCarousel info={fin[i]} key={"Takken" + i} leaders={component} />
        );
      })}
    </BaseLayout>
  );
}

export async function getStaticProps() {
  const layoutData = await client.query({
    query: getGeneralData(),
  });

  let general = layoutData.data.generalData.data.attributes.GeneralData;

  let KapoenenLeiding = await getGroupLeaders("Kapoenen");
  let WelpenLeiding = await getGroupLeaders("Welpen");
  let AkabeLeiding = await getGroupLeaders("Akabe");
  let JonggiverLeiding = await getGroupLeaders("Jonggivers");
  let GiverLeiding = await getGroupLeaders("Givers");
  let JinLeiding = await getGroupLeaders("Jin");

  let leaderList = [
    KapoenenLeiding,
    WelpenLeiding,
    AkabeLeiding,
    JonggiverLeiding,
    GiverLeiding,
    JinLeiding,
  ];
  let fin = [
    {
      Items: [],
      IsLeaderShowcase: true,
      IsGroupsShowcase: false,
      Title: "Kapoenen",
    },
    {
      Items: [],
      IsLeaderShowcase: true,
      IsGroupsShowcase: false,
      Title: "Welpen",
    },
    {
      Items: [],
      IsLeaderShowcase: true,
      IsGroupsShowcase: false,
      Title: "Akabe",
    },
    {
      Items: [],
      IsLeaderShowcase: true,
      IsGroupsShowcase: false,
      Title: "Jonggivers",
    },
    {
      Items: [],
      IsLeaderShowcase: true,
      IsGroupsShowcase: false,
      Title: "Givers",
    },
    {
      Items: [],
      IsLeaderShowcase: true,
      IsGroupsShowcase: false,
      Title: "Jin",
    },
  ];

  return {
    props: { fin: fin, general: general, leaderList: leaderList },
    revalidate: 86400, // 60*60*24 = every 24 hours
  };
}
