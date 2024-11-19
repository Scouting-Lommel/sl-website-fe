import { Metadata } from 'next';
import { generateMetadataForPage } from '@/lib/helpers/generateMetadata';
import UnauthorizedBlock from '@/components/organisms/Unauthorized';
import { getGeneralData } from '../api';

export const generateMetadata = async (): Promise<Metadata> => {
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
};

const UnauthorizedPage: React.FC = (): JSX.Element => {
  return <UnauthorizedBlock />;
};

export default UnauthorizedPage;
