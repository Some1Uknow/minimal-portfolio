'use client';

import { InView } from '@/components/ui/in-view';
import { socials } from '@/lib/data';

export function Contact() {
  return (
    <section id="contact" className="py-10 px-4 md:px-6">
      <div className="max-w-3xl">
        <InView
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewOptions={{ margin: '0px 0px -100px 0px' }}
        >
          <h2 className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-3">
            Contact
          </h2>
          <p className="text-xl sm:text-2xl font-medium text-zinc-800 dark:text-zinc-200 mb-5 max-w-xl">
            Let&apos;s build something together.
          </p>
        </InView>

        <InView
          variants={{
            hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
            visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
          }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          viewOptions={{ margin: '0px 0px -50px 0px' }}
        >
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5">
            I&apos;m always interested in hearing about new opportunities,
            collaborations, or just having a chat about Solana development and
            Web3.
          </p>
        </InView>

        <InView
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          viewOptions={{ margin: '0px 0px -50px 0px' }}
          className="mb-8"
        >
          <a
            href="mailto:raghu250407@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-300 rounded-lg transition-all group shadow-sm hover:shadow-md"
          >
            <span>Get in touch</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </InView>

        <InView
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
          viewOptions={{ margin: '0px 0px -50px 0px' }}
        >
          <h3 className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-4">
            Find me on
          </h3>
          <div className="flex flex-wrap gap-2">
            {socials.map((social, index) => (
              <InView
                key={social.name}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{
                  duration: 0.3,
                  ease: 'easeOut',
                  delay: 0.4 + index * 0.1,
                }}
                viewOptions={{ margin: '0px 0px -30px 0px' }}
              >
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 hover:border-zinc-200 dark:hover:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-all"
                >
                  <SocialIcon name={social.name} />
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-zinc-900 dark:text-zinc-100">
                      {social.name}
                    </span>
                    <span className="text-[10px] text-zinc-500 dark:text-zinc-500">
                      {social.handle}
                    </span>
                  </div>
                </a>
              </InView>
            ))}
          </div>
        </InView>
      </div>
    </section>
  );
}

function SocialIcon({ name }: { name: string }) {
  switch (name) {
    case 'GitHub':
      return (
        <svg
          className="w-4 h-4 text-zinc-700 dark:text-zinc-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      );
    case 'LinkedIn':
      return (
        <svg
          className="w-4 h-4 text-zinc-700 dark:text-zinc-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case 'Twitter':
      return (
        <svg
          className="w-4 h-4 text-zinc-700 dark:text-zinc-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    default:
      return null;
  }
}
