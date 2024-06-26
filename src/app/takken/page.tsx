import { notFound } from 'next/navigation';
import { generateMetadataForPage } from '@/lib/helpers/generateMetadata';
import Blocks from '@/content-blocks';
import { getGeneralData } from '../api';
import { getGroupsPage } from './api';

export async function generateMetadata() {
  const { generalData } = await getGeneralData();
  const { groupsPage } = await getGroupsPage();
  if (!groupsPage || !generalData) return {};

  const metadata = generateMetadataForPage(
    groupsPage.data.attributes.pageMeta,
    generalData.data.attributes,
  );

  return { ...metadata };
}

const GroupsPage = async () => {
  const { groupsPage } = await getGroupsPage();

  if (!groupsPage) notFound();

  return (
    <>
      <Blocks content={groupsPage.data.attributes.blocks} />
    </>
  );
};

export default GroupsPage;
