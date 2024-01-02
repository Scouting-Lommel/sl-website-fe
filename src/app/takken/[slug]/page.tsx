import { notFound } from 'next/navigation';
import { generateMetadataForPage } from '@/lib/helpers/metadata';
import Blocks from '@/content-blocks';
import { getGeneralData } from '../../api';
import { getGroupPage } from './api';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

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

  if (!group) notFound();

  const session = await getServerSession(authOptions);

  return (
    <>
      <Blocks content={group.attributes.blocks} session={session}/>
    </>
  );
};

export default GroupPage;
