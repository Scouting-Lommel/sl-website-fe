import { Header } from '../../components/organisms/Header';
import { Footer } from '../../components/organisms/Footer';
import { UpdateAuth } from '../../lib/api/security/security';
// layout is everything that is the same on each page, header, footer, navigation bar...

export default function Layout({ children, generalData}) {
  UpdateAuth();
  let header = {}
  let footer = {}
  let socials = {}
  let address = {}
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
      <Header info={header}/>
        <main className="px-60">{children}</main>
      <Footer footInfo={footer} address={address} socials={socials}/>
    </>
  )
  }