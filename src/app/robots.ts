import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: process.env.APP_ENV === 'production' ? ['/'] : [],
      disallow: process.env.APP_ENV === 'production' ? ['/dashboard', '/dashboard/*'] : ['/*'],
    },
    sitemap: `${process.env.SITE_URL}/sitemap.xml`,
  };
}
