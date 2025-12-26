import { Metadata } from 'next';
import { getSiteUrl } from './getSiteUrl';

type PageMetaObj = {
  pageTitle: string;
  pageDescription: string;
  slug: string;
  noIndex?: boolean;
  metaImage?: { data: { attributes: { url: string } } };
};

type MetaDataObj = {
  siteName: string;
  siteDescription: string;
  url: string;
  image: { data: { attributes: { url: string } } };
};

/**
 * Generates metadata for the root layout of the website.
 *
 * @param metaData - An object containing metadata information.
 * @returns An object containing metadata properties for the website.
 *
 * @property {string} metaData.siteName - The name of the site.
 * @property {string} metaData.siteDescription - The description of the site.
 * @property {string} metaData.url - The URL of the site.
 * @property {object} metaData.image - An object containing image data.
 * @property {object} metaData.image.data - An object containing image attributes.
 * @property {object} metaData.image.data.attributes - An object containing image attributes.
 * @property {string} metaData.image.data.attributes.url - The URL of the image.
 *
 * @returns {Metadata} An object containing metadata properties for the website.
 */
const generateMetadataForRootLayout = async (metaData: MetaDataObj): Promise<Metadata> => {
  const siteUrl = await getSiteUrl();
  
  return {
    title: {
      default: metaData.siteName || 'Scouting Sint-Pieter Lommel',
      template: `%s • ${metaData.siteName || 'Scouting Sint-Pieter Lommel'}`,
    },
    description: metaData.siteDescription,
    metadataBase: new URL(metaData.url || siteUrl || '') || null,
    manifest: '/assets/head/site.webmanifest',
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

/**
 * Generates metadata for a page based on the provided page metadata and site metadata.
 *
 * @param {PageMetaObj} pageMeta - The metadata specific to the page.
 * @param {MetaDataObj} metaData - The general metadata for the site.
 * @param {string} [path] - The optional path for the page.
 * @returns {Metadata} The generated metadata object.
 */
const generateMetadataForPage = async (
  pageMeta: PageMetaObj,
  metaData: MetaDataObj,
  path?: string,
): Promise<Metadata> => {
  const siteUrl = await getSiteUrl();
  
  return {
    title: pageMeta?.pageTitle,
    description: pageMeta?.pageDescription,
    alternates: {
      canonical: `${siteUrl}${path ? '/' + path : ''}${
        pageMeta?.slug ? '/' + pageMeta?.slug : ''
      }`,
    },
    robots: {
      index: pageMeta?.noIndex || true,
      follow: pageMeta?.noIndex || true,
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

export { generateMetadataForRootLayout, generateMetadataForPage };
