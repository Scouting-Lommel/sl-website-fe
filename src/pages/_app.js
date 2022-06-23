import './styles/globals.css'
import { ApolloProvider, from } from "@apollo/client";
import client from "../lib/api/apollo/client";
import { AuthProvider } from "../lib/api/security/security"
// no idea why this has to be here, but without it, the applicaiton throws an error
function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ApolloProvider>
  )
}

export default MyApp;