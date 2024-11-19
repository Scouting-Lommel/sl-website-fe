import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generateMetadataForPage } from '@/lib/helpers/generateMetadata';
import Blocks from '@/content-blocks';
import { getGeneralData } from '../api';
import { getInfoPage, getYearTheme } from './api';

export const generateMetadata = async (): Promise<Metadata> => {
  const { generalData } = await getGeneralData();
  const { infoPage } = await getInfoPage();
  if (!infoPage || !generalData) return {};

  const metadata = generateMetadataForPage(
    infoPage.data.attributes.pageMeta,
    generalData.data.attributes,
  );

  return { ...metadata };
};

const InfoPage: React.FC = async (): Promise<JSX.Element> => {
  const { infoPage } = await getInfoPage();
  const { yearThemes } = await getYearTheme();

  if (!infoPage) notFound();

  const blockIndex = infoPage.data.attributes.blocks.findIndex(
    (el: any) => el.__typename === 'ComponentContentBlocksYearThemeBlock',
  );
  infoPage.data.attributes.blocks[blockIndex].yearTheme = yearThemes.data[0].attributes;

  return (
    <>
      <Blocks content={infoPage.data.attributes.blocks} />
    </>
  );
};

export default InfoPage;
