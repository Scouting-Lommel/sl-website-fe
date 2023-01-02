import Head from "next/head";
import Script from "next/script";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import { UpdateAuth } from "@/lib/api/security/security";

const BaseLayout = ({ children, generalData, title, noIndex, url }) => {
  UpdateAuth();

  let header = {};
  let footer = {};
  let socials = {};
  let address = {};

  if (!generalData) return <>{children}</>;

  generalData.forEach((component) => {
    switch (component.__typename) {
      case "ComponentGeneralHeader":
        header = component;
        break;
      case "ComponentGeneralSocials":
        socials = component;
        break;
      case "ComponentGeneralFooter":
        footer = component;
        break;
      case "ComponentContentBlocksAddress":
        address = component;
        break;
      default:
        break;
    }
  });

  return (
    <>
      <Head>
        <title>{title}</title>
        {noIndex && <meta name="googlebot" content="noindex" />}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/assets/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/assets/favicon/safari-pinned-tab.svg"
          color="#eeb531"
        />
        <link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#eeb531" />
        <meta
          name="msapplication-config"
          content="/assets/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
      />
      <Header info={header} />
      <main className="px-60 min-h-screen">{children}</main>
      <Footer footInfo={footer} address={address} socials={socials} />
    </>
  );
};

export default BaseLayout;
