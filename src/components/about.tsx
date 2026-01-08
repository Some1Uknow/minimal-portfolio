'use client';

import { InView } from '@/components/ui/in-view';
import { aboutContent, skills, recognition } from '@/lib/data';

function SkillBadge({ skill }: { skill: { name: string; icon: React.ReactNode } }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2 py-1 text-xs text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 rounded-md">
      <span className="text-sm">{skill.icon}</span>
      {skill.name}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="py-14 px-4 md:px-6">
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
            About
          </h2>
        </InView>

        <InView
          variants={{
            hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
            visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewOptions={{ margin: '0px 0px -50px 0px' }}
        >
          <p className="text-lg sm:text-xl font-medium text-zinc-800 dark:text-zinc-200 leading-relaxed mb-4">
            {aboutContent.summary}
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
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
            {aboutContent.achievement}
          </p>
        </InView>

        <InView
          variants={{
            hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
            visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
          }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          viewOptions={{ margin: '0px 0px -50px 0px' }}
        >
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
            {aboutContent.expertise}
          </p>
        </InView>

        {/* Recognition */}
        <InView
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewOptions={{ margin: '0px 0px -50px 0px' }}
          className="mb-8"
        >
          <h3 className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-4">
            Recognition
          </h3>
          <div className="grid gap-2">
            {recognition.map((item, index) => (
              <InView
                key={item.title}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{
                  duration: 0.4,
                  ease: 'easeOut',
                  delay: index * 0.1,
                }}
                viewOptions={{ margin: '0px 0px -30px 0px' }}
              >
                <div className="flex items-start gap-3 p-3 rounded-lg bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800">
                  <span className="text-lg">{item.icon}</span>
                  <div>
                    <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      {item.title}
                    </h4>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </InView>
            ))}
          </div>
        </InView>

        {/* Skills */}
        <InView
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewOptions={{ margin: '0px 0px -50px 0px' }}
        >
          <h3 className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-4">
            Technical Skills
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <h4 className="text-[10px] font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2">
                Blockchain
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {skills.blockchain.map((skill) => (
                  <SkillBadge key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[10px] font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2">
                Languages
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {skills.languages.map((skill) => (
                  <SkillBadge key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[10px] font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2">
                Frameworks
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {skills.frameworks.map((skill) => (
                  <SkillBadge key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[10px] font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2">
                Infrastructure
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {skills.infrastructure.map((skill) => (
                  <SkillBadge key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </InView>
      </div>
    </section>
  );
}
