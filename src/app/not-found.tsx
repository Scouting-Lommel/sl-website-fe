import { Metadata } from 'next';
import { generateMetadataForPage } from '@/lib/helpers/generateMetadata';
import NotFoundBlock from '@/components/organisms/NotFound';
import { getGeneralData } from './api';

export async function generateMetadata(): Promise<Metadata> {
  const { generalData } = await getGeneralData();
  if (!generalData) return {};

  const metadata = generateMetadataForPage(
    {
      pageTitle: 'Pagina niet gevonden',
      pageDescription: 'Scouting Sint-Pieter Lommel',
      slug: 'pagina-niet-gevonden',
    },
    generalData.data.attributes,
  );

  return { ...metadata };
}

const NotFoundPage = () => {
  return <NotFoundBlock />;
};

export default NotFoundPage;
