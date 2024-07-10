import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],

  callbacks: {
    async signIn({ user }) {
      const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/get-user-groups`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: user.email }),
      });

      const groups = await res.json();

      console.log(groups);

      return true;
    },
    async session({ session, token }) {
      const newSession = { ...session, user: { ...session.user, groups: token.groups } };
      return newSession;
    },
  },
};
