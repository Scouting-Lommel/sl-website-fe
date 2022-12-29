import { ApolloProvider } from "@apollo/client";
import client from "@/lib/api/apollo/client";
import { AuthProvider } from "@/lib/api/security/security";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ApolloProvider>
  );
}

export default MyApp;
