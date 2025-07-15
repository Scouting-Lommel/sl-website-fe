import { Metadata } from 'next';
import { generateMetadataForPage } from '@/lib/helpers/generateMetadata';
import { getGeneralData } from '../api';

export const generateMetadata = async (): Promise<Metadata> => {
  const { generalData } = await getGeneralData();
  if (!generalData) return {};

  const metadata = generateMetadataForPage(
    {
      pageTitle: 'Development playground',
      pageDescription: 'Development playground',
      slug: 'playground',
    },
    generalData.data.attributes,
  );

  return { ...metadata };
};

const PlaygroundPage = async (): Promise<JSX.Element> => {
  return <>Playground</>;
};

export default PlaygroundPage;
