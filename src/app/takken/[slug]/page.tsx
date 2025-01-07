import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generateMetadataForPage } from '@/lib/helpers/generateMetadata';
import Blocks from '@/content-blocks';
import { getGroupPage } from './api';
import { getGeneralData } from '../../api';

type Props = { params: { slug: string } };

export const generateMetadata = async ({ params: { slug } }: Props): Promise<Metadata> => {
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

  if (!group) notFound();

  group.attributes.blocks.forEach((block: any) => {
    if (block.__typename == 'ComponentContentBlocksFilesBlock') {
      block.files = group.attributes.files;
      block.links = group.attributes.links;
    }
    if (block.__typename === 'ComponentContentBlocksActivitiesBlock') {
      block.groupSlug = group.attributes.pageMeta.slug;
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
