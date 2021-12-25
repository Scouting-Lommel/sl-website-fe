import Navbar from '../../components/organisms/navbar';
import Footer from '../../components/organisms/footer';
// layout is everything that is the same on each page, header, footer, navigation bar...

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className='py-6 px-8 border-2'>{children}</main>
      <Footer />
    </>
  )
  }