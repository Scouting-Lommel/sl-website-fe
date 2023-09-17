import { notFound } from 'next/navigation';
import { generateMetadataForPage } from '@/lib/helpers/metadata';
import Blocks from '@/content-blocks';
import { getGeneralData } from '../api';
import { getRegisterPage } from './api';

export async function generateMetadata() {
  const { generalData } = await getGeneralData();
  const { registerPage } = await getRegisterPage();
  if (!registerPage || !generalData) return {};

  const metadata = generateMetadataForPage(
    registerPage.data.attributes.pageMeta,
    generalData.data.attributes,
  );

  return { ...metadata };
}

const RegisterPage = async () => {
  const { registerPage } = await getRegisterPage();

  if (!registerPage) notFound();

  // add register block
  let content = registerPage.data.attributes.blocks;

  const register = {
    __typename: 'ComponentContentRegisterBlock',
  };

  content?.push(register);

  return (
    <>
      <Blocks content={content} />
    </>
  );
};

export default RegisterPage;
