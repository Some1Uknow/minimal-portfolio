'use client';

import { InView } from '@/components/ui/in-view';
import { experience } from '@/lib/data';

export function Experience() {
  return (
    <section id="experience" className="section-wrapper section-experience">
      <div className="section-content py-10 md:py-20">
        <InView
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewOptions={{ margin: '0px 0px -100px 0px' }}
        >
          <h2 className="font-heading text-2xl sm:text-4xl text-white mb-6 md:mb-10">
            Experience
          </h2>
        </InView>

        <div className="space-y-0">
          {experience.map((item, index) => (
            <InView
              key={`${item.company}-${item.role}`}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              transition={{
                duration: 0.5,
                ease: 'easeOut',
                delay: index * 0.05,
              }}
              viewOptions={{ margin: '0px 0px -50px 0px' }}
            >
              <div className="py-6 border-b border-zinc-100 transition-colors duration-300 hover:border-white/28 dark:border-zinc-800">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <h3 className="text-base font-medium text-white transition-transform duration-300 ease-out hover:translate-x-1">
                    {item.role}
                  </h3>
                  <span className="text-xs text-white">
                    {item.period}
                  </span>
                </div>
                <p className="text-sm text-white mb-2">
                  {item.company}
                </p>
                <p className="text-sm text-white leading-relaxed">
                  {item.description}
                </p>
              </div>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}
