'use client';

import { InView } from '@/components/ui/in-view';
import { experience } from '@/lib/data';

export function Experience() {
  return (
    <section id="experience" className="py-10 px-4 md:px-6">
      <div className="max-w-3xl">
        <InView
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewOptions={{ margin: '0px 0px -100px 0px' }}
        >
          <h2 className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-5">
            Experience
          </h2>
        </InView>

        <div className="space-y-5">
          {experience.map((item, index) => (
            <InView
              key={`${item.company}-${item.role}`}
              variants={{
                hidden: { opacity: 0, x: -30, filter: 'blur(4px)' },
                visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
              }}
              transition={{
                duration: 0.5,
                ease: 'easeOut',
                delay: index * 0.1,
              }}
              viewOptions={{ margin: '0px 0px -50px 0px' }}
            >
              <div className="relative pl-5 border-l-2 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
                <div className="absolute -left-[7px] top-0 w-3 h-3 rounded-full bg-zinc-100 dark:bg-zinc-800 border-2 border-zinc-300 dark:border-zinc-700" />
                <div className="pb-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 mb-1">
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      {item.role}
                    </h3>
                    <span className="text-xs text-zinc-500 dark:text-zinc-500">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400 mb-1">
                    {item.company}
                  </p>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}
