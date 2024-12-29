import React from 'react';
import "../styles/fonts.css";
import "../styles/globals.css";
import { urbanist } from './fonts';
import { metadata } from './metadata';
import { ThemeProvider } from 'next-themes';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${urbanist.variable} ${urbanist.className}`} suppressHydrationWarning>
      <head>
        <title>{metadata.title.default}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(', ')} />
        <meta name="robots" content={metadata.robots.index ? 'index,follow' : 'noindex,nofollow'} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:title" content={metadata.openGraph.title.default} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:creator" content={metadata.twitter.creator} />
        <meta name="twitter:title" content={metadata.twitter.title.default} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images} />
        <link rel="icon" href="/pic.jpeg" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange={false}
        >
          <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
};
