'use client';

import Image from 'next/image';
import { InView } from '@/components/ui/in-view';
import { projects, minorProjects } from '@/lib/data';

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <InView
      variants={{
        hidden: { opacity: 0, y: 40, filter: 'blur(4px)' },
        visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
      }}
      transition={{
        duration: 0.5,
        ease: 'easeOut',
        delay: index * 0.1,
      }}
      viewOptions={{ margin: '0px 0px -100px 0px' }}
      className="group"
    >
      <article className="h-full rounded-lg bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 hover:border-zinc-200 dark:hover:border-zinc-700 transition-all duration-300 hover:shadow-lg hover:shadow-zinc-100 dark:hover:shadow-zinc-900/50 overflow-hidden">
        {/* Screenshot */}
        {project.image && (
          <div className="relative w-full h-32 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
            <Image
            loading='eager'
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
            {/* Not Live Banner */}
            {project.notLive && (
              <div className="absolute bottom-0 left-0 right-0 bg-orange-500 text-white text-[10px] font-medium py-1 px-2 text-center">
                {project.notLive}
              </div>
            )}
          </div>
        )}
        
        <div className="flex flex-col h-full p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors">
              {project.title}
            </h3>
            {project.highlight && (
              <span className="shrink-0 ml-2 px-1.5 py-0.5 text-[10px] font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 rounded">
                {project.highlight}
              </span>
            )}
          </div>

          <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3 flex-grow line-clamp-2">
            {project.description}
          </p>

          {project.metrics && (
            <p className="text-[10px] font-medium text-zinc-500 dark:text-zinc-500 mb-3">
              {project.metrics}
            </p>
          )}

          <div className="flex flex-wrap gap-1 mb-3">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-1.5 py-0.5 text-[10px] text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 pt-3 border-t border-zinc-100 dark:border-zinc-800">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-300 rounded-md transition-colors"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                <span>Live Demo</span>
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-md transition-colors"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>
      </article>
    </InView>
  );
}

function MinorProjectCard({
  project,
  index,
}: {
  project: (typeof minorProjects)[0];
  index: number;
}) {
  return (
    <InView
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{
        duration: 0.4,
        ease: 'easeOut',
        delay: index * 0.08,
      }}
      viewOptions={{ margin: '0px 0px -50px 0px' }}
      className="group"
    >
      <article className="rounded-lg bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 hover:border-zinc-200 dark:hover:border-zinc-700 transition-all duration-300 hover:shadow-md overflow-hidden">
        {/* Banner Image */}
        {project.image && (
          <div className="relative w-full h-32 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              {project.title}
            </h4>
          </div>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-3 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1 mb-3">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-1.5 py-0.5 text-[10px] text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 pt-3 border-t border-zinc-100 dark:border-zinc-800">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span>Live</span>
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>
      </article>
    </InView>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-14 px-4 md:px-6">
      <div className="max-w-5xl">
        <InView
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewOptions={{ margin: '0px 0px -100px 0px' }}
        >
          <h2 className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-3">
            Projects
          </h2>
          <p className="text-xl sm:text-2xl font-medium text-zinc-800 dark:text-zinc-200 mb-8 max-w-2xl">
            A selection of projects I&apos;ve built, from Solana programs to
            full-stack applications.
          </p>
        </InView>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Minor Projects */}
        <InView
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewOptions={{ margin: '0px 0px -50px 0px' }}
          className="mt-10"
        >
          <h3 className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-4">
            Other Projects
          </h3>
        </InView>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {minorProjects.map((project, index) => (
            <MinorProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
