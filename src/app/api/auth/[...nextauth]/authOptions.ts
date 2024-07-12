import { getOrganisationRole } from '@/lib/helpers/getOrganisationRole';
import { NextAuthOptions, Session } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
      authorization: {
        params: {
          hd: 'scoutinglommel.be',
        },
      },
    }),
  ],

  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      const { name, email, picture, ...tokenProps } = token;

      const response = await fetch(
        `${process.env.SITE_URL}/api/auth/get-org-unit?email=${token.email}`,
      );
      const data = await response.json();

      return { ...session, ...tokenProps, role: getOrganisationRole(data.orgUnitPath) };
    },
  },
};
