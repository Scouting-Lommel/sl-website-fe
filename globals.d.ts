declare module '*.css';

declare module '*.gql' {
  import { DocumentNode } from 'graphql';

  const value: DocumentNode;
  export = value;
}

import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    jwt: string
  }
}
