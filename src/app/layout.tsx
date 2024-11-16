export const dynamic = 'force-dynamic';

import { Metadata, Viewport } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getServerSession } from 'next-auth';
import { getLocale, getMessages } from 'next-intl/server';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import { generateMetadataForRootLayout } from '@/lib/helpers/generateMetadata';
import SessionProvider from '@/lib/providers/SessionProvider';
import GlobalAlert from '@/components/atoms/GlobalAlert';
import SkipToContent from '@/components/atoms/SkipToContent';
import Footer from '@/components/organisms/Footer';
import Header from '@/components/organisms/Header';
import { getGeneralData } from './api';

import '@/app/global.css';

export async function viewport(): Promise<Viewort> {
  return { themeColor: 'ffffff' };
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getGeneralData();
  if (!data) return {};

  const metadata = generateMetadataForRootLayout(data.generalData.data.attributes);

  return { ...metadata };
}

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const locale = await getLocale();
  const messages = await getMessages();

  const data = await getGeneralData();
  const session = await getServerSession(authOptions);

  const globalAlert = data.generalData.data.attributes.globalAlert;

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <SessionProvider session={session}>
            <SkipToContent className="skip-to-content" />

            {globalAlert && globalAlert?.enabled && (
              <GlobalAlert label={globalAlert?.label} variant={globalAlert?.variant} />
            )}

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
          </SessionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
