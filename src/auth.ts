import NextAuth, { DefaultSession } from 'next-auth';
import GitHub from 'next-auth/providers/github';

declare module 'next-auth' {
    interface Session {
        user: {
            /** The user's id. */
            id: string
        } & DefaultSession['user']
    }
}

export const {
    handlers: { GET, POST },
    auth,
} = NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GitHub({
            clientId: process.env.GITHUB_ID ?? '',
            clientSecret: process.env.GITHUB_SECRET ?? '',
        })],
    callbacks: {

        jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        session: ({ session, token }) => {
            if (session?.user && token?.id) {
                session.user.id = String(token.id);
            }
            return session;
        },
        signIn({ user }) {
            return !!user; // this ensures there is a logged in user for -every- request
        },
    },
});
