import generateSitemap from '@/lib/helpers/generateSitemap';
import { getSitemap } from './api';

const Sitemap = async (): Promise<any> => {
  const data = await getSitemap();
  const sitemap = await generateSitemap(data);

  return sitemap;
};

export default Sitemap;
