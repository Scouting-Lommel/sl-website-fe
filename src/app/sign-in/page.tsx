import LoginForm from "@/components/molecules/LoginForm";
import { generateMetadataForPage } from '@/lib/helpers/metadata';
import { getGeneralData } from '../api';
import { getLoginPage } from "./api";
import { notFound } from 'next/navigation';

export async function generateMetadata() {
  const { generalData } = await getGeneralData();
  const { registerPage } = await getLoginPage();
  if (!generalData || !registerPage) return {};

  const pagemeta = {
    ...registerPage.data.attributes.pageMeta, 
    pageTitle: 'Log in', 
    pageDescription: 'Log in', 
    slug: 'login'
  }

  const metadata = generateMetadataForPage(
    pagemeta,
    generalData.data.attributes,
  );

  return { ...metadata };
}

const SignIn = async () => {
  const { registerPage } = await getLoginPage();

  if (!registerPage) notFound();

  return (
    <LoginForm />
  )
}

export default SignIn;