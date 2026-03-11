import Link from 'next/link';

import { TechBadgeRow } from '@/components/project-logos';
import { projectCategories } from '@/lib/projects';

function ProjectCategoryRow({
  category,
}: {
  category: (typeof projectCategories)[number];
}) {
  return (
    <li className="border-b border-white/12 transition-colors duration-300 hover:border-white/28 last:border-b-0">
      <Link
        href={`/projects/${category.slug}`}
        className="group flex items-center justify-between gap-4 py-5 text-white transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 sm:py-6"
      >
        <div className="min-w-0">
          <h3 className="font-heading text-2xl leading-none transition-transform duration-300 ease-out group-hover:translate-x-1 sm:text-3xl">
            {category.title}
          </h3>
        </div>

        <div className="flex items-center gap-4 transition-opacity duration-300 group-hover:opacity-100 sm:gap-6">
          <TechBadgeRow
            logos={category.logos}
            variant="minimal"
            labelMode="sr-only"
          />
          <span
            aria-hidden="true"
            className="text-base text-white/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white/70"
          >
            &rarr;
          </span>
        </div>
      </Link>
    </li>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-wrapper section-projects">
      <div className="section-content py-14 md:py-24">
        <div className="max-w-2xl">
          <p className="text-[0.68rem] font-medium uppercase tracking-[0.34em] text-white/58">
            Selected Work
          </p>
          <h2 className="mt-4 text-balance font-heading text-3xl text-white sm:text-5xl">
            Proof Of Work, built with discipline.
          </h2>
        </div>

        <ul className="mt-10">
          {projectCategories.map((category) => (
            <ProjectCategoryRow key={category.slug} category={category} />
          ))}
        </ul>
      </div>
    </section>
  );
}
