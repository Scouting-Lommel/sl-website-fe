import { notFound } from 'next/navigation';
import Blocks from '@/content-blocks';
import { generateMetadataForPage } from '@/lib/helpers/generateMetadata';
import { getActivities, getGroupPage } from './api';
import { getGeneralData } from '../../api';

type Props = { params: { slug: string } };

export const generateMetadata = async ({ params: { slug } }: Props) => {
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
};

const GroupPage = async ({ params: { slug } }: Props): Promise<JSX.Element> => {
  const { groups } = await getGroupPage(slug);
  const group = groups.data[0];
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const dateString = year + '-' + month + '-' + day;
  const { activities } = await getActivities(slug, dateString);

  if (!group) notFound();

  group.attributes.blocks.forEach((block: any) => {
    if (block.__typename == 'ComponentContentBlocksFilesBlock') {
      block.files = group.attributes.files;
      block.links = group.attributes.links;
    }
    if (block.__typename === 'ComponentContentBlocksActivitiesBlock') {
      block.activities = activities.data;
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
