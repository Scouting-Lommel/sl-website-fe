import { Metadata } from 'next';
import { generateMetadataForPage } from '@/lib/helpers/generateMetadata';
import UnauthorizedBlock from '@/components/organisms/Unauthorized';
import { getGeneralData } from '../api';

export async function generateMetadata(): Promise<Metadata> {
  const { generalData } = await getGeneralData();
  if (!generalData) return {};

  const metadata = generateMetadataForPage(
    {
      pageTitle: 'Geen toegang tot deze pagina',
      pageDescription: 'Scouting Sint-Pieter Lommel',
      slug: 'geen-toegang',
    },
    generalData.data.attributes,
  );

  return { ...metadata };
}

const UnauthorizedPage = () => {
  return <UnauthorizedBlock />;
};

export default UnauthorizedPage;
