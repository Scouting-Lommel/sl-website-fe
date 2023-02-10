// import Head from "next/head";
// import Layout from "@/pages/styles/Layout";
import client from '@/lib/api/apollo/client';
import {
  getDetailedScoutsGazet,
  //   getScoutsGazetAllIds,
} from '@/lib/api/gazet/queries';

export default function ScoutsGazet({ fin }) {
  return <>scoutsgazet item</>;
}

export const getStaticPaths = async () => {
  // const { data } = await client.query({
  //     query: getScoutsGazetAllIds()
  // })

  // const paths = data.scoutsgazets.data.map(gazetId => {
  //     return {
  //         params: { id: gazetId.id }
  //     }
  // })

  const paths = [];
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const { data } = await client.query({
    query: getDetailedScoutsGazet(id),
  });

  let fin = data;

  return {
    props: { fin },
    revalidate: 86400, // 60*60*24 = every 24 hours
  };
};
