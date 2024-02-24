import type { Metadata } from 'next';
import './globals.css';
import '@mantine/core/styles.css';
import '@mantine/code-highlight/styles.css';
import { ColorSchemeScript, createTheme, MantineProvider } from '@mantine/core';
import MainShell from '@/components/layout/MainShell';
import SessionProvider from '@/components/providers/SessionProvider';
import ChatHistory from '@/components/chat/ChatHistory/ChatHistory';
import { auth } from '@/auth';

// import '@mantine/dates/styles.css';
// import '@mantine/dropzone/styles.css';

export const metadata: Metadata = {
    title: 'Proxy api bot',
};

const theme = createTheme({
    fontFamily: 'Open Sans, sans-serif',
    primaryColor: 'teal',
});

export default async function RootLayout({
                                             children,
                                         }: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await auth();
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <title>My ProxyApiBot</title>
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <ColorSchemeScript />
        </head>
        <body>
        <SessionProvider session={session}>
            <MantineProvider theme={theme}>
                <MainShell
                  drawer={
                        <ChatHistory />
                    }
                >
                    {children}
                </MainShell>
            </MantineProvider>
        </SessionProvider>

        </body>
        </html>
    );
}
