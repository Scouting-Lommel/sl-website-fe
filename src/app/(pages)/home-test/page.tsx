import { notFound } from 'next/navigation';
import Blocks from '@/content-blocks';
import { getHomePage } from './api';

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  const { homePage } = await getHomePage();
  if (!homePage) notFound();

  return {
    title: homePage.data.attributes.pageMeta.pageTitle,
    description: homePage.data.attributes.pageMeta.pageDescription,
  };
}

const TestPage = async () => {
  const { homePage } = await getHomePage();
  if (!homePage) notFound();

  return (
    <>
      <Blocks content={homePage.data.attributes.blocks} />
    </>
  );
};

export default TestPage;
