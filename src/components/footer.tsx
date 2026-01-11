'use client';

import { InView } from '@/components/ui/in-view';
import { personalInfo } from '@/lib/data';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-wrapper section-footer">
      <div className="section-content py-6">
        <InView
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <p className="text-sm text-white text-center">
              © {currentYear} Raghav Sharma. All rights reserved.
            </p>
            <p className="text-xs text-white opacity-50">
              Built with Next.js, Tailwind CSS & Motion
            </p>
          </div>
        </InView>
      </div>
    </footer>
  );
}
