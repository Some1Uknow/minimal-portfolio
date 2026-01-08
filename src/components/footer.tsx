'use client';

import { InView } from '@/components/ui/in-view';
import { personalInfo } from '@/lib/data';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 px-4 md:px-6 border-t border-zinc-100 dark:border-zinc-800">
      <div className="max-w-5xl mx-auto">
        <InView
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <p className="text-xs text-zinc-500 dark:text-zinc-500">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-xs text-zinc-400 dark:text-zinc-600">
              Built with Next.js, Tailwind CSS & Motion
            </p>
          </div>
        </InView>
      </div>
    </footer>
  );
}
