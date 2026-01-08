import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeToggle } from '@/components/theme-toggle';
import { StructuredData } from '@/components/structured-data';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

const siteUrl = 'https://raghav.codes';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Raghav Sharma | Solana Program Engineer',
    template: '%s | Raghav Sharma',
  },
  description:
    'Solana engineer building on-chain programs with Rust and Anchor. Solana Foundation Grant Recipient, SIH24 Winner, and Superteam India Member. Expert in DeFi, NFTs, and Web3 development.',
  keywords: [
    'Solana',
    'Blockchain',
    'Rust',
    'Anchor',
    'Web3',
    'Smart Contracts',
    'DeFi',
    'NFT',
    'Solana Developer',
    'Blockchain Engineer',
    'Solana Foundation Grant',
    'Superteam India',
    'SIH24 Winner',
    'LearnSolana',
    'Solana DApps',
    'Rust Programming',
    'TypeScript',
    'Next.js',
  ],
  authors: [{ name: 'Raghav Sharma', url: siteUrl }],
  creator: 'Raghav Sharma',
  publisher: 'Raghav Sharma',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'Raghav Sharma | Solana Program Engineer',
    description:
      'Solana engineer building on-chain programs with Rust and Anchor. Solana Foundation Grant Recipient, SIH24 Winner, and Superteam India Member.',
    siteName: 'Raghav Sharma',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Raghav Sharma - Solana Program Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raghav Sharma | Solana Program Engineer',
    description:
      'Solana engineer building on-chain programs with Rust and Anchor. Solana Foundation Grant Recipient, SIH24 Winner, and Superteam India Member.',
    creator: '@Some1UKnow25',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon-192x192" href="/icon-192x192.png" sizes="192x192" />
        <link rel="icon-512x512" href="/icon-512x512.png" sizes="512x512" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100`}
      >
        <ThemeProvider>
          {children}
          <ThemeToggle />
        </ThemeProvider>
        <StructuredData />
      </body>
    </html>
  );
}
