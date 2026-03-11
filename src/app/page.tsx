import { Header } from '@/components/header';
import { About } from '@/components/about';
import { Projects } from '@/components/projects';
import { Experience } from '@/components/experience';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import type { Metadata } from 'next';

const siteUrl = 'https://raghav.codes';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Welcome to my portfolio. I am a Solana Program Engineer building on-chain programs with Rust and Anchor. Explore my projects, experience, and get in touch.',
  openGraph: {
    title: 'Raghav Sharma | Solana Program Engineer',
    description:
      'Solana engineer building on-chain programs with Rust and Anchor. Solana Foundation Grant Recipient, SIH24 Winner, and Superteam India Member.',
    type: 'website',
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
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
    images: [`${siteUrl}/og-image.png`],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen pt-2 md:pt-4">
      <main>
        <Header />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
