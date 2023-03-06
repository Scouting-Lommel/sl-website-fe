// import Head from "next/head";
// import Layout from "@/pages/styles/Layout";
// import client from "@/lib/api/apollo/client";

export default function Gazet(props) {
  return <>scoutsgazet</>;
}

export async function getStaticProps() {
  // const { data } = await client.query({
  //     query: getScoutsGazetPreview(10)
  // })

  // let fin = data

  return {
    props: {},
    revalidate: 86400, // 60*60*24 = every 24 hours
  };
}
