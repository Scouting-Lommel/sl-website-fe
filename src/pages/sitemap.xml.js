import client from '@/lib/api/apollo/client';
import getSitemapData from '@/lib/api/sitemap';
import getSlugsForSitemap from '@/lib/helpers/getSlugsForSitemap';
import { getUrl } from '@/lib/helpers/getUrl';

const Sitemap = () => {};

export async function getServerSideProps({ res, locale, defaultLocale }) {
  const notFound = { notFound: true };

  const { data } = await client.query({
    query: getSitemapData(),
  });

  if (!data) {
    return notFound;
  }

  const pages = getSlugsForSitemap(data);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
        ${pages
          .map((page) => {
            return `
            <url>
                <loc>${getUrl(locale, defaultLocale, page.path, page.slug)}</loc>
                <lastmod>${page.lastMod}</lastmod>
                <changefreq>weekly</changefreq>
            </url>
          `;
          })
          .join('')}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default Sitemap;
