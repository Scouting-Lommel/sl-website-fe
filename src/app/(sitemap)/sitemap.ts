import { getSitemap } from './api';
import generateSitemap from '@/lib/helpers/generateSitemap';

const Sitemap = async () => {
  const data = await getSitemap();
  const sitemap = await generateSitemap(data);

  return sitemap;
};

export default Sitemap;
