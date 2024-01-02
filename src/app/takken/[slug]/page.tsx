import { notFound } from 'next/navigation';
import { generateMetadataForPage } from '@/lib/helpers/metadata';
import Blocks from '@/content-blocks';
import { getGeneralData } from '../../api';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getActivities, getGroupPage } from './api';

export async function generateMetadata({ params: { slug } }: { params: { slug: string } }) {
  const { generalData } = await getGeneralData();
  const { groups } = await getGroupPage(slug);
  const group = groups.data[0];

  if (!group || !generalData) return {};

  const metadata = generateMetadataForPage(
    group.attributes.pageMeta,
    generalData.data.attributes,
    'takken',
  );

  return { ...metadata };
}

const GroupPage = async ({ params: { slug } }: { params: { slug: string } }) => {
  const { groups } = await getGroupPage(slug);
  const group = groups.data[0];
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const dateString = year + '-' + month + '-' + day;
  const { activities } = await getActivities(slug, dateString);

  if (!group) notFound();

  const session = await getServerSession(authOptions);

  group.attributes.blocks.forEach((block: any) => {
    if (block.__typename == 'ComponentContentBlocksFilesBlock') {
      block.files = group.attributes.files;
    }
    if (block.__typename === 'ComponentContentBlocksActivitiesBlock') {
      block.activities = activities.data;
      block.session = session;
    }
    if (block.__typename === 'ComponentContentBlocksLeadersBlock') {
      block.leaders = group.attributes.leaders;
    }
  });

  return (
    <>
      <Blocks content={group.attributes.blocks} />
    </>
  );
};

export default GroupPage;
