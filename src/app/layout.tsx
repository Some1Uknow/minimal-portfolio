import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Raghav Sharma | Solana Program Engineer',
  description:
    'Solana engineer building on-chain programs with Rust and Anchor. Solana Foundation Grant Recipient, SIH24 Winner, and Superteam India Member.',
  keywords: [
    'Solana',
    'Blockchain',
    'Rust',
    'Anchor',
    'Web3',
    'Smart Contracts',
    'DeFi',
    'NFT',
  ],
  authors: [{ name: 'Raghav Sharma' }],
  openGraph: {
    title: 'Raghav Sharma | Solana Program Engineer',
    description:
      'Solana engineer building on-chain programs with Rust and Anchor.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raghav Sharma | Solana Program Engineer',
    description:
      'Solana engineer building on-chain programs with Rust and Anchor.',
    creator: '@Some1UKnow25',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100`}
      >
        {children}
      </body>
    </html>
  );
}
