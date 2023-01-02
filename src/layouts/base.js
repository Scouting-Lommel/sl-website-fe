import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import { UpdateAuth } from "@/lib/api/security/security";
import PageHead from "@/components/organisms/PageHead";

const BaseLayout = ({
  children,
  pageTitle,
  pageMeta,
  slug,
  path,
  structuredData,
}) => {
  UpdateAuth();

  return (
    <>
      <PageHead
        pageTitle={pageTitle}
        pageMeta={pageMeta}
        slug={slug}
        path={path}
        structuredData={structuredData}
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
      />
      <Header />
      <main className="px-60 min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default BaseLayout;
