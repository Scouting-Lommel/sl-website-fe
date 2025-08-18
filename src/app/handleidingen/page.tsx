import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { JSX } from 'react';
import { generateMetadataForPage } from '@/lib/helpers/generateMetadata';
import Blocks from '@/content-blocks';
import ArticleGrid from '@/components/organisms/ArticleGrid';
import { getGeneralData } from '../api';
import { getManuals, getManualsPage } from './api';

export const generateMetadata = async (): Promise<Metadata> => {
  const { generalData } = await getGeneralData();
  const { manualsOverviewPage } = await getManualsPage();

  if (!manualsOverviewPage?.data || !generalData) return {};

  const metadata = generateMetadataForPage(
    manualsOverviewPage.data.attributes.pageMeta,
    generalData.data.attributes,
  );

  return { ...metadata };
};

const ManualsPage = async (): Promise<JSX.Element> => {
  const { manualsOverviewPage } = await getManualsPage();
  const { manuals } = await getManuals();

  if (!manualsOverviewPage?.data) notFound();

  return (
    <>
      <Blocks content={manualsOverviewPage.data.attributes.blocks} />
      <ArticleGrid
        articles={manuals?.data?.map((manual: any) => ({
          id: manual.id,
          ...manual.attributes,
        }))}
        loginCallbackUrl="/handleidingen"
        modWithToolbar
      />
    </>
  );
};

export default ManualsPage;
