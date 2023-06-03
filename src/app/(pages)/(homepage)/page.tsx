import { notFound } from 'next/navigation';
import Blocks from '@/content-blocks';
import { getHomePage } from './api';

export async function generateMetadata() {
  const { homePage } = await getHomePage();
  if (!homePage) notFound();

  return {
    title: homePage.data.attributes.pageMeta.pageTitle,
    description: homePage.data.attributes.pageMeta.pageDescription,
  };
}

const HomePage = async () => {
  const { homePage } = await getHomePage();
  if (!homePage) notFound();

  return <Blocks content={homePage.data.attributes.blocks} />;
};

export default HomePage;
