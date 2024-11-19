import { Metadata } from 'next';
import { generateMetadataForPage } from '@/lib/helpers/generateMetadata';
import NotFoundBlock from '@/components/organisms/NotFound';
import { getGeneralData } from './api';

export const generateMetadata = async (): Promise<Metadata> => {
  const { generalData } = await getGeneralData();
  if (!generalData) return {};

  const metadata = generateMetadataForPage(
    {
      pageTitle: 'Pagina niet gevonden',
      pageDescription: 'Scouting Sint-Pieter Lommel',
      slug: '',
    },
    generalData.data.attributes,
  );

  return { ...metadata };
};

const NotFoundPage: React.FC = (): JSX.Element => {
  return <NotFoundBlock />;
};

export default NotFoundPage;
