import { generateMetadataForRootLayout } from '@/lib/helpers/metadata';
import Header from '@/components/organisms/Header';
import SkipToContent from '@/components/atoms/SkipToContent';
import Footer from '@/components/organisms/Footer';
import { getGeneralData } from './api';
import '@/assets/sass/index.scss';

export async function generateMetadata() {
  const data = await getGeneralData();
  if (!data) return {};

  const metadata = generateMetadataForRootLayout(data.generalData.data.attributes);

  return { ...metadata };
}

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const data = await getGeneralData();

  return (
    <html lang="nl">
      <body>
        <SkipToContent className="skip-to-content" />
        <Header
          logo={data.generalData.data.attributes.logo}
          mainNavigation={data.generalData.data.attributes.mainNavigation}
          groups={data.groups.data.map((item: any) => item.attributes)}
          rentalLocations={data.rentalLocations.data.map((item: any) => item.attributes)}
        />
        <main className="sl-main" id="main">
          {children}
        </main>
        <Footer
          siteName={data.generalData.data.attributes.siteName}
          vatNumber={data.generalData.data.attributes.vatNumber}
          groupNumber={data.generalData.data.attributes.groupNumber}
          address={data.generalData.data.attributes.address}
          contactItems={data.generalData.data.attributes.contactItems}
          footerNavigation={data.generalData.data.attributes.footerNavigation}
        />
      </body>
    </html>
  );
};

export default RootLayout;
