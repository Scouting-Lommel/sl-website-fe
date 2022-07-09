import { Header } from '../../components/organisms/Header';
import { Footer } from '../../components/organisms/Footer';
import { UpdateAuth } from '../../lib/api/security/security';
import Head from 'next/head';
// layout is everything that is the same on each page, header, footer, navigation bar...

export default function Layout({ children, generalData, title, noIndex, url}) {
  UpdateAuth();
  let header = {}
  let footer = {}
  let socials = {}
  let address = {}
  if(!generalData) return <>{children}</>
  generalData.forEach(component => {
    switch (component.__typename) {
      case "ComponentGeneralHeader":
        header = component
        break;
      case "ComponentGeneralSocials":
        socials = component
        break;
      case "ComponentGeneralFooter":
        footer = component
        break;
      case "ComponentContentBlocksAddress":
        address = component
        break;
      default:
        break;
    }
  });
  return (
    <>
      <Head>
        <title>{title}</title>
        {noIndex && <meta name="googlebot" content="noindex"/>}
      </Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
      <script src="https://cdn.tailwindcss.com"></script>
      <Header info={header}/>
        <main className="px-60 min-h-screen">{children}</main>
      <Footer footInfo={footer} address={address} socials={socials}/>
    </>
  )
  }