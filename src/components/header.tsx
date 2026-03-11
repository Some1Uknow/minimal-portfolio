'use client';

import { TextEffect } from '@/components/ui/text-effect';
import { InView } from '@/components/ui/in-view';

export function Header() {
  return (
    <header className="section-wrapper section-header">
      <div className="section-content min-h-[50vh] flex flex-col justify-center py-12 md:py-20">
        <TextEffect
          as="h1"
          preset="fade"
          per="char"
          className="font-heading text-4xl sm:text-6xl md:text-7xl mb-6 text-white"
        >
          Raghav Sharma
        </TextEffect>
        <TextEffect
          as="h2"
          preset="fade"
          per="char"
          className="text-lg sm:text-2xl font-medium mb-6 text-white"
          delay={0.3}
        >
          Solana Program Engineer
        </TextEffect>

        <InView
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.8 }}
          viewOptions={{ margin: '0px 0px -50px 0px' }}
        >
          <div className="flex items-center gap-8">
            <a
              href="#projects"
              className="rounded-full px-2 py-1 text-sm font-medium text-white transition-all hover:underline decoration-1 underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 sm:text-base"
            >
              View Projects &rarr;
            </a>
            <a
              href="#contact"
              className="rounded-full px-2 py-1 text-sm font-medium text-white transition-all hover:underline decoration-1 underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 sm:text-base"
            >
              Get in Touch
            </a>
          </div>
        </InView>
      </div>
    </header>
  );
}
