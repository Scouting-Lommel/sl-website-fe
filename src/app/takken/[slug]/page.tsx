import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { JSX } from 'react';
import { generateMetadataForPage } from '@/lib/helpers/generateMetadata';
import Blocks from '@/content-blocks';
import { getGroupPage } from './api';
import { getGeneralData } from '../../api';

type Props = { params: Promise<{ slug: string }> };

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const { slug } = await props.params;

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

const GroupPage = async (props: Props): Promise<JSX.Element> => {
  const { slug } = await props.params;

  const { groups } = await getGroupPage(slug);
  const group = groups.data[0];

  if (!group) notFound();

  group.attributes.blocks.forEach((block: any) => {
    switch (block.__typename) {
      case 'ComponentContentBlocksFilesBlock':
      case 'ComponentContentBlocksActivitiesBlock':
        block.groupSlug = group.attributes.pageMeta.slug;
        break;
      case 'ComponentContentBlocksLeadersBlock':
        block.leaders = group.attributes.leaders;
        break;
    }
  });

  return (
    <>
      <Blocks content={group.attributes.blocks} />
    </>
  );
};

export default GroupPage;
