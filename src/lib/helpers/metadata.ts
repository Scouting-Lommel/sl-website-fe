import { Metadata } from 'next';

type PageMetaObj = {
  pageTitle: string;
  pageDescription: string;
  slug: string;
  metaImage: { data: { attributes: { url: string } } };
};

type MetaDataObj = {
  siteName: string;
  siteDescription: string;
  url: string;
  image: { data: { attributes: { url: string } } };
};

export const generateMetadataForRootLayout = (metaData: MetaDataObj): Metadata => {
  return {
    title: {
      default: metaData.siteName || 'Scouting Sint-Pieter Lommel',
      template: `%s • ${metaData.siteName || 'Scouting Sint-Pieter Lommel'}`,
    },
    description: metaData.siteDescription,
    metadataBase: new URL(metaData.url || process.env.SITE_URL || '') || null,
    manifest: '/assets/head/site.webmanifest',
    themeColor: '#ffffff',
    icons: {
      icon: [
        { url: '/assets/head/favicon-16x16.png', sizes: '16x16' },
        { url: '/assets/head/favicon-32x32.png', sizes: '32x32' },
      ],
      apple: [{ url: '/assets/head/apple-touch-icon.png', sizes: '180x180' }],
      shortcut: { url: '/assets/head/favicon.ico' },
    },
    openGraph: {
      locale: 'nl',
      type: 'website',
      siteName: metaData.siteName || 'Scouting Sint-Pieter Lommel',
      title: metaData.siteName || 'Scouting Sint-Pieter Lommel',
      description: metaData.siteDescription,
      images: metaData.image.data?.attributes.url,
    },
    twitter: {
      card: 'summary_large_image',
      title: metaData.siteName || 'Scouting Sint-Pieter Lommel',
      description: metaData.siteDescription,
      images: metaData.image.data?.attributes.url,
    },
  };
};

export const generateMetadataForPage = (
  pageMeta: PageMetaObj,
  metaData: MetaDataObj,
  path?: string,
): Metadata => {
  return {
    title: pageMeta?.pageTitle,
    description: pageMeta?.pageDescription,
    alternates: {
      canonical: `${metaData.url}${path ? '/' + path : ''}${
        pageMeta?.slug ? '/' + pageMeta?.slug : ''
      }`,
    },
    openGraph: {
      locale: 'nl',
      type: 'website',
      siteName: metaData.siteName || 'Scouting Sint-Pieter Lommel',
      title: `${pageMeta?.pageTitle} • ${metaData.siteName}`,
      description: pageMeta?.pageDescription,
      images: pageMeta?.metaImage?.data?.attributes.url,
    },
    twitter: {
      card: 'summary_large_image',
      title: pageMeta?.pageTitle,
      description: pageMeta?.pageDescription,
      images: pageMeta?.metaImage?.data?.attributes.url,
    },
  };
};
