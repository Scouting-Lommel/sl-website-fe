import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { getOrganisationRole } from '@/lib/helpers/getOrganisationRole';
import { getSiteUrl } from '@/lib/helpers/getSiteUrl';

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

  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: '/inloggen',
  },

  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      const { name, email, picture, ...tokenProps } = token;

      const siteUrl = await getSiteUrl();
      const response = await fetch(`${siteUrl}/api/auth/get-org-unit?email=${token.email}`);
      const data = await response.json();

      return {
        ...session,
        ...tokenProps,
        orgUnit: data.orgUnitPath,
        role: getOrganisationRole(data.orgUnitPath),
      };
    },
  },
};
