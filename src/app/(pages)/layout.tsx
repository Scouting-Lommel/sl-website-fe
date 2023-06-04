import { generateMetadataForRootLayout } from '@/lib/helpers/metadata';
// import { Header } from '@/components/organisms/Header';
import SkipToContent from '@/components/atoms/SkipToContent';
// import { Footer } from '@/components/organisms/Footer';
import '@/assets/sass/index.scss';
import { getGeneralData } from './api';

export async function generateMetadata() {
  const data = await getGeneralData();
  if (!data) return {};

  const metadata = generateMetadataForRootLayout(data.generalData.data.attributes);

  return { ...metadata };
}

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  // const data = await getGeneralData();

  return (
    <html lang="nl">
      <body>
        <SkipToContent className="skip-to-content" />
        {/* <Header /> */}
        <main className="sl-main" id="main">
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
};

export default RootLayout;
