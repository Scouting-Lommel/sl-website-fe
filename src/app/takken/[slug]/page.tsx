import { notFound } from 'next/navigation';
import { generateMetadataForPage } from '@/lib/helpers/metadata';
import Blocks from '@/content-blocks';
import HeroBlock from '@/content-blocks/HeroBlock';
import { getGeneralData } from '../../api';
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

  if (!group || !activities) notFound();

  for (let i = 0; i < group.attributes.blocks.length; i++) {
    if (group.attributes.blocks[i].__typename === 'ComponentContentBlocksActivitiesBlock') {
      group.attributes.blocks[i].activities = activities.data;
    }
  }

  return (
    <>
      <HeroBlock
        title={group.attributes.pageTitle}
        subtitle={group.attributes.subtitle}
        variant="default"
      />
      <Blocks content={group.attributes.blocks} />
    </>
  );
};

export default GroupPage;
