import './styles/globals.css'
import { ApolloProvider } from "@apollo/client";
import client from "../lib/api/apollo/client";
// no idea why this has to be here, but without it, the applicaiton throws an error
function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp;