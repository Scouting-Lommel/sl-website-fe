import Head from "next/head";
import { useRouter } from "next/router";
import { useContext } from "react";
import { getUrl } from "@/lib/helpers/getUrl";
import { GeneralContext } from "@/context/GeneralContext";

const PageHead = ({
  pageMeta,
  noIndex,
  pageTitle,
  slug,
  path,
  structuredData,
}) => {
  const { general } = useContext(GeneralContext);
  const { locale, defaultLocale } = useRouter();

  const title = pageTitle
    ? `${pageTitle} • ${general.siteName || "Scouting Sint-Pieter Lommel"}`
    : pageMeta?.pageTitle && general?.siteName
    ? `${pageMeta.pageTitle} • ${general.siteName}`
    : "Scouting Sint-Pieter Lommel";

  return (
    <Head>
      {/* PageMeta & SEO */}
      <title>{title}</title>
      <meta
        name="description"
        content={pageMeta?.pageDescription || general?.siteDescription}
      />
      <link rel="canonical" href={getUrl(locale, defaultLocale, path, slug)} />

      {/* Robots */}
      {(pageMeta?.noIndex || noIndex) && (
        <meta name="robots" content="noindex,nofollow" />
      )}

      {/* Open Graph Meta  */}
      <meta property="og:locale" content={locale} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={general?.siteName} />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content={pageMeta?.pageDescription || general?.siteDescription}
      />
      <meta
        property="og:image"
        content={general?.image?.data?.attributes?.url}
      />

      {/* Article Metadata */}
      <meta
        property="article:publisher"
        content="https://www.facebook.com/ScoutingLommel"
      />
      <meta property="article:modified_time" content={general?.updatedAt} />

      {/* Twitter Metadata */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content={pageMeta?.pageDescription || general?.siteDescription}
      />
      <meta
        name="twitter:image"
        content={general?.image?.data?.attributes?.url}
      />

      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}

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
    </Head>
  );
};

export default PageHead;
