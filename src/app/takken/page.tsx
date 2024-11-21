import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Blocks from '@/content-blocks';
import { generateMetadataForPage } from '@/lib/helpers/generateMetadata';
import { getGeneralData } from '../api';
import { getGroupsPage } from './api';

export const generateMetadata = async (): Promise<Metadata> => {
  const { generalData } = await getGeneralData();
  const { groupsPage } = await getGroupsPage();
  if (!groupsPage || !generalData) return {};

  const metadata = generateMetadataForPage(
    groupsPage.data.attributes.pageMeta,
    generalData.data.attributes,
  );

  return { ...metadata };
};

const GroupsPage = async (): Promise<JSX.Element> => {
  const { groupsPage } = await getGroupsPage();

  if (!groupsPage) notFound();

  return (
    <>
      <Blocks content={groupsPage.data.attributes.blocks} />
    </>
  );
};

export default GroupsPage;
