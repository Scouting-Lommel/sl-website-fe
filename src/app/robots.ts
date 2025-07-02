import type { MetadataRoute } from 'next';

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      allow: process.env.NEXT_PUBLIC_APP_ENV === 'production' ? ['/'] : [],
      disallow:
        process.env.NEXT_PUBLIC_APP_ENV === 'production' ? ['/dashboard', '/dashboard/*'] : ['/*'],
    },
    sitemap: `${process.env.SITE_URL}/sitemap.xml`,
  };
};

export default robots;
