import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generateMetadataForPage } from '@/lib/helpers/generateMetadata';
import Typography from '@/components/atoms/Typography';
import Hero from '@/components/organisms/Hero';
import { getManualPage } from './api';
import { getGeneralData } from '../../api';

type Props = { params: { slug: string } };

export const generateMetadata = async ({ params: { slug } }: Props): Promise<Metadata> => {
  const { generalData } = await getGeneralData();
  const { manuals } = await getManualPage(slug);
  const manual = manuals.data[0];

  if (!manual || !generalData) return {};

  const metadata = generateMetadataForPage(
    manual.attributes.pageMeta,
    generalData.data.attributes,
    'verhuur',
  );

  return { ...metadata };
};

const ManualPage = async ({ params: { slug } }: Props): Promise<JSX.Element> => {
  const { manuals } = await getManualPage(slug);
  const manual = manuals.data[0];

  if (!manual) notFound();

  console.log(manual);

  return (
    <article className="sl-layout">
      <Hero variant="simple" title={manual?.attributes?.title} />
      <Typography data={manual?.attributes?.description} />
    </article>
  );
};

export default ManualPage;
