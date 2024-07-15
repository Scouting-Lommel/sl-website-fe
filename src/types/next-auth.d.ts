import NextAuth from 'next-auth';
import { OrganisationRoles } from '@/lib/helpers/getOrganisationRole';

declare module 'next-auth' {
  interface Session {
    role?: string;
    orgUnit?: OrganisationRoles;
  }
}
