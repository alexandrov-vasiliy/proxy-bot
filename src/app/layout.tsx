import type {Metadata} from "next";
import "./globals.css";
import '@mantine/core/styles.css';
import '@mantine/code-highlight/styles.css';
import MainShell from "@/components/layout/MainShell";

import {ColorSchemeScript, MantineProvider} from "@mantine/core";

// import '@mantine/dates/styles.css';
// import '@mantine/dropzone/styles.css';

export const metadata: Metadata = {
    title: "Proxy api bot",
};


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8"/>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <title>My ProxyApiBot</title>
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <ColorSchemeScript/>
        </head>
        <body>
            <MantineProvider>
                <MainShell>
                    {children}
                </MainShell>
            </MantineProvider>
        </body>
        </html>
    );
}
