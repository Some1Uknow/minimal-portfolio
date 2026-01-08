import { Header } from '@/components/header';
import { About } from '@/components/about';
import { Projects } from '@/components/projects';
import { Experience } from '@/components/experience';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Welcome to my portfolio. I am a Solana Program Engineer building on-chain programs with Rust and Anchor. Explore my projects, experience, and get in touch.',
  openGraph: {
    title: 'Raghav Sharma | Solana Program Engineer',
    description:
      'Solana engineer building on-chain programs with Rust and Anchor. Solana Foundation Grant Recipient, SIH24 Winner, and Superteam India Member.',
    type: 'website',
  },
  twitter: {
    title: 'Raghav Sharma | Solana Program Engineer',
    description:
      'Solana engineer building on-chain programs with Rust and Anchor. Solana Foundation Grant Recipient, SIH24 Winner, and Superteam India Member.',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-6xl">
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
