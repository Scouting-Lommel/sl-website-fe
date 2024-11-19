import { Metadata } from 'next';
import { notFound, ReadonlyURLSearchParams } from 'next/navigation';
import { generateMetadataForPage } from '@/lib/helpers/generateMetadata';
import Blocks from '@/content-blocks';
import Form from '@/components/organisms/Forms';
import { getGeneralData } from '../api';
import { getContactPage } from './api';

type Props = {
  searchParams: ReadonlyURLSearchParams;
};

export const generateMetadata = async (): Promise<Metadata> => {
  const { generalData } = await getGeneralData();
  const { contactPage } = await getContactPage();
  if (!contactPage || !generalData) return {};

  const metadata = generateMetadataForPage(
    contactPage.data.attributes.pageMeta,
    generalData.data.attributes,
  );

  return { ...metadata };
};

const ContactPage: React.FC<Props> = async ({ searchParams }): Promise<JSX.Element> => {
  const { contactPage } = await getContactPage();

  if (!contactPage) notFound();

  return (
    <>
      <Blocks content={contactPage.data.attributes.blocks} />
      <Form variant="contact" blockProperties={{ slug: 'contact-form' }} props={searchParams} />
    </>
  );
};

export default ContactPage;
