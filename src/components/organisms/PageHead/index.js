import Head from "next/head";
import { useRouter } from "next/router";
import { useContext } from "react";
import { getUrl } from "@/lib/helpers/getUrl";
import { GeneralContext } from "@/context/GeneralContext";

const PageHead = ({ pageMeta, pageTitle, slug, path, structuredData }) => {
  const { general } = useContext(GeneralContext);
  const { locale, defaultLocale } = useRouter();

  return (
    <Head>
      {/* PageMeta & SEO */}
      <title>
        {pageTitle
          ? `${pageTitle} • ${
              general.siteName || "Scouting Sint-Pieter Lommel"
            }`
          : pageMeta?.pageTitle && general?.siteName
          ? `${pageMeta.pageTitle} • ${general.siteName}`
          : "Scouting Sint-Pieter Lommel"}
      </title>
      <meta name="description" content={general.siteDescription} />
      <link rel="canonical" href={getUrl(locale, defaultLocale, path, slug)} />

      {/* Robots */}
      {pageMeta?.noIndex && <meta name="robots" content="noindex,nofollow" />}

      {/* Favicon */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/assets/head/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/assets/head/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/assets/head/favicon-16x16.png"
      />
      <link rel="manifest" href="/assets/head/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/assets/head/safari-pinned-tab.svg"
        color="#eeb531"
      />
      <link rel="shortcut icon" href="/assets/head/favicon.ico" />
      <meta name="msapplication-TileColor" content="#eeb531" />
      <meta
        name="msapplication-config"
        content="/assets/head/browserconfig.xml"
      />
      <meta name="theme-color" content="#ffffff" />

      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}
    </Head>
  );
};

export default PageHead;
