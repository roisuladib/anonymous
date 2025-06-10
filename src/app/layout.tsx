import '^/styles/globals.css';

import type { Metadata, Viewport } from 'next';

import { cn } from '@heroui/theme';
import { Link } from '@heroui/link';

import Providers from './providers';

import { fonts, siteConfig } from '^/config';
import ProgressBar from '^/components/progress-bar';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({ children }: Readonly<Children>) {
  return (
    <html
      suppressHydrationWarning
      lang="en">
      <head>
        <ProgressBar />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-sans text-foreground antialiased',
          fonts.sans.variable,
          fonts.mono.variable,
        )}>
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <div className="relative flex h-screen flex-col">
            <header>Muldoko</header>
            <main className="mx-auto w-full max-w-7xl grow px-4 pt-16 lg:px-10">{children}</main>
            <footer className="flex w-full items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://roisuladib.vercel.app"
                title="Homepage">
                <span className="text-default-600">Powered</span>
                <p className="text-primary">Wiranto</p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
