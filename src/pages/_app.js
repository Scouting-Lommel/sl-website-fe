import './styles/globals.css'
// no idea why this has to be here, but without it, the applicaiton throws an error
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;