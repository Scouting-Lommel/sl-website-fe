import { notFound } from 'next/navigation';
import { generateMetadataForPage } from '@/lib/helpers/metadata';
import Blocks from '@/content-blocks';
import HeroBlock from '@/content-blocks/HeroBlock';
import { getGeneralData } from '../../api';
import { getGroupPage } from './api';

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

  group.attributes.blocks.forEach((block: any) => {
    if (block.__typename == 'ComponentContentBlocksFilesBlock') {
      block.files = group.attributes.files;
    }
  });

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
