'use client';

import { InView } from '@/components/ui/in-view';
import { socials } from '@/lib/data';

export function Contact() {
  return (
    <section id="contact" className="section-wrapper section-contact">
      <div className="section-content py-12 md:py-24">
        <InView
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewOptions={{ margin: '0px 0px -100px 0px' }}
        >
          <h2 className="font-heading text-2xl sm:text-4xl text-white mb-4 md:mb-6">
            Contact
          </h2>
        </InView>

        <InView
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          viewOptions={{ margin: '0px 0px -50px 0px' }}
        >
          <p className="text-sm sm:text-base text-white leading-relaxed mb-6 md:mb-8 max-w-md">
            I&apos;m always interested in hearing about new opportunities,
            collaborations, or just having a chat about Solana development.
          </p>
        </InView>

        <InView
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          viewOptions={{ margin: '0px 0px -50px 0px' }}
          className="mb-8 md:mb-12"
        >
          <a
            href="mailto:raghu250407@gmail.com"
            className="text-sm sm:text-base font-medium text-white underline decoration-white/35 underline-offset-4 transition-all hover:decoration-white/70 hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            raghu250407@gmail.com →
          </a>
        </InView>

        <InView
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
          viewOptions={{ margin: '0px 0px -50px 0px' }}
        >
          <p className="text-sm text-white">
            {socials.map((social, index) => (
              <span key={social.name}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all hover:opacity-80 hover:underline hover:underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                >
                  {social.name}
                </a>
                {index < socials.length - 1 && <span className="mx-2">·</span>}
              </span>
            ))}
          </p>
        </InView>
      </div>
    </section>
  );
}
