import Head from "next/head";

const PageHead = ({ pageMeta, slug, path, structuredData }) => {
  return (
    <Head>
      {/* PageMeta & SEO */}
      <title>
        {pageMeta?.pageTitle
          ? `${pageMeta.pageTitle} • Scouting Sint-Pieter Lommel`
          : "Scouting Sint-Pieter Lommel"}
      </title>
      {pageMeta?.noIndex && <meta name="googlebot" content="noindex" />}

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
