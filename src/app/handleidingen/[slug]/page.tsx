import { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { getTranslations } from 'next-intl/server';
import { formatDateTime } from '@/lib/helpers/dateTime';
import { generateMetadataForPage } from '@/lib/helpers/generateMetadata';
import BlockContainer from '@/components/atoms/BlockContainer';
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
    'handleidingen',
  );

  return { ...metadata };
};

const ManualPage = async ({ params: { slug } }: Props): Promise<JSX.Element> => {
  const session = await getServerSession();

  const { manuals } = await getManualPage(slug);
  const manual = manuals.data[0];

  const t = await getTranslations('common');

  if (!manual) notFound();

  if (!(session && session.user) && manual.attributes.locked) {
    redirect(`/inloggen?callbackUrl=/handleidingen/${manual.attributes.slug}`);
  }

  return (
    <article className="sl-layout--narrow">
      <BlockContainer slug={`${manual?.attributes?.slug}-hero`}>
        <Hero
          variant="simple"
          title={manual?.attributes?.title}
          subtitle={manual?.attributes?.description}
        />
      </BlockContainer>

      <BlockContainer slug={`${manual?.attributes?.slug}-body`} modSmallPadding>
        <Typography data={manual?.attributes?.body} />
      </BlockContainer>

      <BlockContainer slug={`${manual?.attributes?.slug}-body`} modSmallPadding>
        <Typography
          variant="muted"
          data={`${t('lastChanged')}: ${formatDateTime(manual?.attributes?.updatedAt)}`}
        />
      </BlockContainer>
    </article>
  );
};

export default ManualPage;
