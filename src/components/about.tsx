'use client';

import { SkillStrip } from '@/components/skill-strip';
import { InView } from '@/components/ui/in-view';
import { aboutContent } from '@/lib/data';

export function About() {
  return (
    <section id="about" className="section-wrapper section-about">
      <div className="section-content py-12 md:py-24">

        <InView
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewOptions={{ margin: '0px 0px -100px 0px' }}
        >
          <h2 className="mb-6 font-heading text-xl text-white sm:text-4xl md:mb-8">
            About
          </h2>
        </InView>


        <InView
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          viewOptions={{ margin: '0px 0px -50px 0px' }}
        >
          <p className="mb-8 max-w-3xl text-pretty text-sm leading-relaxed text-white sm:text-base md:mb-12">
            {aboutContent.summary} Solana Foundation Grant recipient. Builder of{' '}
            <a
              href="https://learnsol.site"
              target="_blank"
              rel="noopener noreferrer"
              className="italic underline decoration-white/45 underline-offset-4 transition-colors hover:text-white/75 hover:decoration-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            >
              LearnSolana
            </a>
            . Featured in{' '}
            <a
              href="https://blog.colosseum.com/audit-subsidy-program-learnsol-umbra/"
              target="_blank"
              rel="noopener noreferrer"
              className="italic underline decoration-white/45 underline-offset-4 transition-colors hover:text-white/75 hover:decoration-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            >
              Colosseum Codex Newsletter
            </a>
            . Winner of Smart India Hackathon 2024.
          </p>
        </InView>

        {/* Skills - simplified text only */}
        <InView
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: 0.1 }}
          viewOptions={{ margin: '0px 0px -50px 0px' }}
        >
          <SkillStrip />
        </InView>
      </div>
    </section>
  );
}
