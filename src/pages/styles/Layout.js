import { Header } from '../../components/organisms/Header';
import { Footer } from '../../components/organisms/Footer';
// layout is everything that is the same on each page, header, footer, navigation bar...

export default function Layout({ children, generalData}) {
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
      <Header />
      <main className='py-6 px-8 border-2'>{children}</main>
      <Footer />
    </>
  )
  }