import login from '@/pages/api/login';
import NextAuth from 'next-auth';
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET as string,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        if (typeof credentials === 'undefined') {
          return null;
        }
        const token = await login(credentials.email, credentials.password);
        if (token) {
          return { id: token, apiToken: token };
        }
        return null;
      },
    }),
  ],
  pages: {
    error: '/not-found',
    signIn: '/sign-in',
  },
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      // The first time you sign in, the user object is not null
      // and contains the user data returned from the provider
      if (user) {
        // You can add the JWT or any other data to the token object
        token.jwt = user.id
      }
      return token
    },
    async session({ session, token, user }) {
      // The token object contains the JWT and other data
      // You can add the JWT or any other data to the session object
      session.jwt = token.jwt as string
      return session
    }
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
