import NextAuth, { DefaultSession } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

declare module 'next-auth' {
    interface Session {
        user: {
            /** The user's id. */
            id: string
        } & DefaultSession['user']
    }
}

export const handler = NextAuth({
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID ?? '',
            clientSecret: process.env.GITHUB_SECRET ?? '',
        }),
    ],
    callbacks: {

        jwt({ token, user }) {
            console.log('NEXT AUTH jwt CALLBACK', token, user);
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        session: ({ session, token, user }) => {
            console.log('NEXT AUTH session CALLBACK', session, token, user);
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
export { handler as GET, handler as POST };
