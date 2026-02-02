'use client';

import { InView } from '@/components/ui/in-view';
import Link from 'next/link';
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
      <article className="py-6 border-b border-zinc-100 dark:border-zinc-800">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-base font-medium text-white">
            {project.title}
          </h3>
          <div className="flex gap-3 shrink-0 ml-4">
            {project.links.video && (
              <Link
                href={`/projects/${project.slug}`}
                className="text-xs text-white hover:underline transition-all"
              >
                Video ↗
              </Link>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white hover:underline transition-all"
              >
                Live ↗
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white hover:underline transition-all"
              >
                Code ↗
              </a>
            )}
          </div>
        </div>

        <p className="text-sm text-white leading-relaxed mb-3">
          {project.description}
        </p>

        <p className="text-xs text-white">
          {project.tags.slice(0, 3).join(' · ')}
        </p>
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
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      transition={{
        duration: 0.4,
        ease: 'easeOut',
        delay: index * 0.05,
      }}
      viewOptions={{ margin: '0px 0px -30px 0px' }}
    >
      <article className="py-4 border-b border-zinc-100 dark:border-zinc-800">
        <div className="flex items-start justify-between mb-1">
          <h4 className="text-sm font-medium text-white">
            {project.title}
          </h4>
          <div className="flex gap-3 shrink-0 ml-4">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white hover:underline transition-all"
              >
                ↗
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white hover:underline transition-all"
              >
                Code
              </a>
            )}
          </div>
        </div>
        <p className="text-xs text-white">
          {project.description}
        </p>
      </article>
    </InView>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-wrapper section-projects">
      <div className="section-content py-12 md:py-24">
        <InView
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewOptions={{ margin: '0px 0px -100px 0px' }}
        >
          <h2 className="font-heading text-2xl sm:text-4xl text-white mb-3">
            Projects
          </h2>
          <p className="text-sm sm:text-base text-white mb-6 md:mb-10">
            Selected work from Solana programs to full-stack applications.
          </p>
        </InView>

        <div className="space-y-0">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function OtherProjects() {
  return (
    <section className="section-wrapper section-other-projects">
      <div className="section-content py-12 md:py-24">
        <InView
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewOptions={{ margin: '0px 0px -50px 0px' }}
        >
          <h3 className="font-heading text-2xl sm:text-4xl text-white mb-6 md:mb-10">
            Other Projects
          </h3>
        </InView>

        <div className="space-y-0">
          {minorProjects.map((project, index) => (
            <MinorProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
