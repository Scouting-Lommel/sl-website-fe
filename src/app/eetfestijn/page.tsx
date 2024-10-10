import { generateMetadataForPage } from '@/lib/helpers/generateMetadata';
import BlockContainer from '@/components/atoms/BlockContainer';
import Form from '@/components/organisms/Forms';
import Hero from '@/components/organisms/Hero';
import { getGeneralData } from '../api';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const { generalData } = await getGeneralData();
  if (!generalData) return {};

  const metadata = generateMetadataForPage(
    {
      pageTitle: 'Eetfestijn',
      pageDescription: 'Schrijf je in voor ons eetfestijn!',
      slug: 'eetfestijn',
    },
    generalData.data.attributes,
  );

  return { ...metadata };
}

const EetfestijnPage = async () => {
  const t = await getTranslations('forms.eetfestijnForm');

  return (
    <>
      <BlockContainer variant="light" orientation="default" slug="eetfestijn-hero" modSmallPadding>
        <Hero
          title={t('hero.title')}
          subtitle={t('hero.subtitle')}
          variant="simple"
          className="sl-layout"
        />
      </BlockContainer>

      <Form variant="eetfestijn" blockProperties={{ slug: 'eetfestijn-form' }} />
    </>
  );
};

export default EetfestijnPage;
