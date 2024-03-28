import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { eq } from 'drizzle-orm';
import type { DefaultSession } from 'next-auth';
import NextAuth from 'next-auth';

import { db } from '@/server/db';
import { users } from '@/server/db/schema';

import authConfig from './auth.config';

declare module 'next-auth' {
  // eslint-disable-next-line no-unused-vars
  interface Session {
    user: {
      id: string;
    } & DefaultSession['user'];
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  debug: process.env.NODE_ENV !== 'production',
  adapter: DrizzleAdapter(db),
  callbacks: {
    async session({ session, token }) {
      if (session.user && token.sub) session.user.id = token.sub;
      return session;
    },
  },
  events: {
    async linkAccount({ user }) {
      await db
        .update(users)
        .set({
          emailVerified: new Date(),
        })
        .where(eq(users.id, user.id as string));
    },
  },
  session: { strategy: 'jwt' },
  ...authConfig,
});
