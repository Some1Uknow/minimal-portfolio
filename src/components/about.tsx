'use client';

import { InView } from '@/components/ui/in-view';
import { aboutContent, skills, recognition } from '@/lib/data';

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
          <h2 className="font-heading text-2xl sm:text-4xl mb-6 md:mb-8 text-white">
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
          <p className="text-sm sm:text-base text-white leading-relaxed mb-8 md:mb-12">
            {aboutContent.expertise}
          </p>
        </InView>

        {/* Recognition - simplified to inline */}
        <InView
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewOptions={{ margin: '0px 0px -50px 0px' }}
          className="mb-12"
        >
          <p className="text-sm text-white">
            {recognition.map((item, index) => (
              <span key={item.title}>
                {item.title}
                {index < recognition.length - 1 && <span className="mx-2">·</span>}
              </span>
            ))}
          </p>
        </InView>

        {/* Skills - simplified text only */}
        <InView
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewOptions={{ margin: '0px 0px -50px 0px' }}
        >
          <div className="space-y-4">
            <div>
              <span className="text-sm text-white">Blockchain — </span>
              <span className="text-sm text-white">
                {skills.blockchain.map(s => s.name).join(', ')}
              </span>
            </div>
            <div>
              <span className="text-sm text-white">Languages — </span>
              <span className="text-sm text-white">
                {skills.languages.map(s => s.name).join(', ')}
              </span>
            </div>
            <div>
              <span className="text-sm text-white">Frameworks — </span>
              <span className="text-sm text-white">
                {skills.frameworks.map(s => s.name).join(', ')}
              </span>
            </div>
            <div>
              <span className="text-sm text-white">Infrastructure — </span>
              <span className="text-sm text-white">
                {skills.infrastructure.map(s => s.name).join(', ')}
              </span>
            </div>
          </div>
        </InView>
      </div>
    </section>
  );
}
