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
        href="/assets/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/assets/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/assets/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/assets/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/assets/favicon/safari-pinned-tab.svg"
        color="#eeb531"
      />
      <link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#eeb531" />
      <meta
        name="msapplication-config"
        content="/assets/favicon/browserconfig.xml"
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
