import { generateMetadataForPage } from '@/lib/helpers/metadata';
import NotFoundBlock from '@/components/organisms/NotFound';
import { getGeneralData } from './api';

export async function generateMetadata() {
  const { generalData } = await getGeneralData();
  if (!generalData) return {};

  const metadata = generateMetadataForPage(
    {
      pageTitle: 'Pagina niet gevonden',
      pageDescription: 'Scouting Sint-Pieter Lommel',
      slug: 'legal-info',
    },
    generalData.data.attributes,
  );

  return { ...metadata };
}

const NotFoundPage = () => {
  return <NotFoundBlock />;
};

export default NotFoundPage;
