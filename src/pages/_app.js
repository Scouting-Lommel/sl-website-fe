import { ApolloProvider } from "@apollo/client";
import client from "@/lib/api/apollo/client";
import { AuthProvider } from "@/lib/api/security/security";
import { GeneralProvider } from "@/context/GeneralContext";

import "@/assets/sass/index.scss";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <GeneralProvider value={{ ...pageProps?.general }}>
          <Component {...pageProps} />
        </GeneralProvider>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default MyApp;
