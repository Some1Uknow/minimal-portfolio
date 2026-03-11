import type { Metadata } from 'next';
import Link from 'next/link';
import { SiSolana } from 'react-icons/si';

import { blogPosts } from '@/lib/blog-data';

const siteUrl = 'https://raghav.codes';

export const metadata: Metadata = {
  title: 'Blogs',
  description: 'Notes and long-form Solana writing from Raghav Sharma.',
  alternates: {
    canonical: '/blogs',
  },
  openGraph: {
    title: 'Blogs | Raghav Sharma',
    description: 'Notes and long-form Solana writing from Raghav Sharma.',
    url: `${siteUrl}/blogs`,
    images: [
      {
        url: `${siteUrl}/bg-7.jpg`,
        width: 1200,
        height: 630,
        alt: 'Blogs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blogs | Raghav Sharma',
    description: 'Notes and long-form Solana writing from Raghav Sharma.',
    images: [`${siteUrl}/bg-7.jpg`],
  },
};

export default function BlogsPage() {
  return (
    <div className="min-h-screen pt-2 text-white selection:bg-cyan-300/20 md:pt-4">
      <main>
        <section
          className="section-wrapper"
          style={{
            backgroundImage:
              'linear-gradient(135deg, rgba(21, 12, 44, 0.9), rgba(7, 36, 61, 0.66)), url(/bg-7.jpg)',
          }}
        >
          <div className="section-content py-12 md:py-20">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/#projects"
                className="inline-flex items-center text-sm text-white/72 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                Back to projects
              </Link>

              <span className="inline-flex items-center">
                <SiSolana aria-hidden="true" className="h-5 w-5 shrink-0 text-[#8B5CF6]" />
                <span className="sr-only">Solana</span>
              </span>
            </div>

            <div className="mt-8 max-w-3xl">
              <h1 className="text-balance font-heading text-2xl text-white sm:text-5xl lg:text-6xl">
                Blogs
              </h1>
              <p className="mt-4 max-w-2xl text-pretty text-sm leading-6 text-white/74">
                Short notes and long-form Solana writing.
              </p>
            </div>

            <div className="mt-10 border-t border-white/12 pt-8 md:mt-12 md:pt-10">
              <div className="space-y-0">
                {blogPosts.map((post) => (
                  <article
                    key={post.url}
                    className="border-b border-white/12 py-5 transition-colors duration-300 hover:border-white/28 last:border-b-0 sm:py-6"
                  >
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-6">
                      <h2 className="max-w-2xl font-heading text-xl leading-tight text-white sm:text-2xl">
                        {post.title}
                      </h2>

                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                      >
                        Read on X
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
