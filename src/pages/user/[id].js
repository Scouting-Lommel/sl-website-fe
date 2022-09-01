// import client from "@/lib/api/apollo/client";
// import { getAllUserIds, getUser } from "@/lib/api/user/queries";
// import { getGeneralData } from "@/lib/api/general/queries";
// import BaseLayout from "@/layouts/Base";
// import Image from "@/components/atoms/Image";

// export default function user({ fin, general }) {
//   if (fin.leaders.data.length == 0)
//     return <BaseLayout generalData={general}></BaseLayout>;
//   const leader = fin.leaders.data[0].attributes;
//   return (
//     <BaseLayout
//       generalData={general}
//       title={leader.FirstName + " " + leader.LastName}
//       url=""
//       noIndex={true}
//     >
//       <div className="py-5 flex min-h-[500px]">
//         <div className="max-w-xl">
//           <h1 className="text-5xl font-bold py-2">
//             {leader.FirstName + " " + leader.LastName}
//           </h1>
//           <h1 className="text-4xl font-bold py-2">{leader.Totem}</h1>
//           <h1 className="text-2xl font-bold py-2">{leader.Email}</h1>
//           <h1 className="text-2xl font-bold py-2">{leader.Phone}</h1>
//           {leader.GroupRoles.data.length != 0 && (
//             <>
//               <h1 className="text-2xl font-bold py-2">Rollen binnen de tak:</h1>
//               {leader.GroupRoles.data.map((item, i) => {
//                 return (
//                   <h1 className="text-2xl font-bold py-2 pl-2" key={"role" + i}>
//                     {"- " + item.attributes.Name}
//                   </h1>
//                 );
//               })}
//             </>
//           )}
//         </div>
//         <div className="flex flex-col justify-center flex-auto px-24 py-4">
//           <div className="flex justify-center relative w-full h-full">
//             {leader.Image &&
//               leader.Image.data &&
//               leader.Image.data.attributes && (
//                 <Image src={leader.Image.data.attributes.url} alt="" />
//               )}
//           </div>
//         </div>
//       </div>
//     </BaseLayout>
//   );
// }

// export const getStaticPaths = async () => {
//   const { data } = await client.query({
//     query: getAllUserIds(),
//   });

//   const paths = data.leaders.data.map((user) => {
//     return {
//       params: { id: user.id },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async (context) => {
//   const id = context.params.id;

//   const { data } = await client.query({
//     query: getUser(id),
//   });

//   const layoutData = await client.query({
//     query: getGeneralData(),
//   });

//   let fin = data;
//   let general = layoutData.data.generalData.data.attributes.GeneralData;

//   return {
//     props: { fin: fin, general: general },
//     revalidate: 86400, // 60*60*24 = every 24 hours
//   };
// };


export default function t(){
  return <></>
}