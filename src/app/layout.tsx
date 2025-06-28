import * as Sentry from '@sentry/nextjs';
import { Metadata, Viewport } from 'next';
import { getServerSession } from 'next-auth';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { getLayoutData, getSeoData } from '@/lib/api/general/api';
import { DataProvider } from '@/lib/contexts/DataContext';
import { generateMetadataForRootLayout } from '@/lib/helpers/generateMetadata';
import { generateStructuredData } from '@/lib/helpers/generateStructuredData';
import SessionProvider from '@/lib/providers/SessionProvider';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import GlobalAlert from '@/components/atoms/GlobalAlert';
import SkipToContent from '@/components/atoms/SkipToContent';
import Footer from '@/components/organisms/Footer';
import Header from '@/components/organisms/Header';

import '@/app/global.css';

type Props = { children: React.ReactNode };

export const viewport = async (): Promise<Viewport> => {
  return { themeColor: 'ffffff' };
};

export const generateMetadata = async (): Promise<Metadata> => {
  const data = await getSeoData();
  if (!data) return {};

  const metadata = generateMetadataForRootLayout(data.generalData.data.attributes);

  return {
    ...metadata,
    other: {
      ...Sentry.getTraceData(),
    },
  };
};

const RootLayout = async ({ children }: Props): Promise<JSX.Element> => {
  const locale = await getLocale();
  const messages = await getMessages();

  const data = await getLayoutData();
  const session = await getServerSession(authOptions);

  const globalAlert = data.generalData.data.attributes.globalAlert;

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <SessionProvider session={session}>
            <DataProvider data={data}>
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
            </DataProvider>
          </SessionProvider>
        </NextIntlClientProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateStructuredData(data.generalData?.data?.attributes)),
          }}
        />
      </body>
    </html>
  );
};

export default RootLayout;
