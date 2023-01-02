import Link from "next/link";
import BaseLayout from "@/layouts/base";
import client from "@/lib/api/apollo/client";
import { getGeneralData } from "@/lib/api/general/queries";

export default function Custom404({}) {
  return (
    <BaseLayout pageTitle={"Pagina niet gevonden"} slug="404">
      <section>
        <h1>404</h1>
        <div>Page Not Found</div>
        <Link href="/">
          <span>Go Home</span>
        </Link>
      </section>
    </BaseLayout>
  );
}

export async function getStaticProps() {
  const general = await client.query({
    query: getGeneralData(),
  });

  return {
    props: { general: general.data.generalData.data.attributes },
    revalidate: 86400, // 60*60*24 = every 24 hours
  };
}
