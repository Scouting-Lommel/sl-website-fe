import { Header } from '@/components/organisms/Header';
import SkipToContent from '@/components/atoms/SkipToContent';
import { Footer } from '@/components/organisms/Footer';
import { getGeneralData } from './api';

export const dynamic = 'force-dynamic';
export const dynamicParams = true;

export const metadata = {
  title: { default: 'Scouting Sint-Pieter Lommel', template: '%s - Scouting Sint-Pieter Lommel' },
  description:
    'Scouting Lommel is een grote scoutsgroep in het hartje van Lommel. Elke zaterdag staan we paraat aan onze lokalen in de Nieuwe Kopen, vlakbij de prachtige Lommelse Sahara midden in Bosland.',
  manifest: '/assets/head/site.webmanifest',
  themeColor: '#ffffff',
  icons: {
    icon: [
      { url: '/assets/head/favicon-16x16.png', sizes: '16x16' },
      { url: '/assets/head/favicon-32x32.png', sizes: '32x32' },
    ],
    apple: [{ url: '/assets/head/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: { url: '/assets/head/favicon.ico' },
  },
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const data = await getGeneralData();
  console.log(data);

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
