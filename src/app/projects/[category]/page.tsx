import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { TechBadgeRow } from '@/components/project-logos';
import { getCategoryWithProjects, projectCategories } from '@/lib/projects';

const siteUrl = 'https://raghav.codes';

export function generateStaticParams() {
  return projectCategories.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const projectCategory = getCategoryWithProjects(category);

  if (!projectCategory) {
    return {
      title: 'Projects',
    };
  }

  return {
    title: projectCategory.title,
    description: projectCategory.pageIntro,
    alternates: {
      canonical: `/projects/${projectCategory.slug}`,
    },
    openGraph: {
      title: `${projectCategory.title} | Raghav Sharma`,
      description: projectCategory.pageIntro,
      url: `${siteUrl}/projects/${projectCategory.slug}`,
      images: [
        {
          url: `${siteUrl}${projectCategory.backgroundImage}`,
          width: 1200,
          height: 630,
          alt: projectCategory.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${projectCategory.title} | Raghav Sharma`,
      description: projectCategory.pageIntro,
      images: [`${siteUrl}${projectCategory.backgroundImage}`],
    },
  };
}

function ProjectRow({
  project,
}: {
  project: NonNullable<ReturnType<typeof getCategoryWithProjects>>['projects'][number];
}) {
  return (
    <article className="group border-b border-white/12 py-5 transition-colors duration-300 hover:border-white/28 last:border-b-0 sm:py-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-6">
        <div className="min-w-0 max-w-2xl">
          <h2 className="font-heading text-xl leading-tight text-white transition-transform duration-300 ease-out group-hover:translate-x-1 sm:text-2xl">
            {project.title}
          </h2>
          <p className="mt-2 max-w-xl text-pretty text-sm leading-6 text-white/72">
            {project.description}
          </p>
        </div>

        <div className="flex shrink-0 flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/70 md:justify-end">
          {project.links.live ? (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            >
              Live
            </a>
          ) : null}
          {project.links.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            >
              Code
            </a>
          ) : null}
          {project.links.video ? (
            <a
              href={project.links.video}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            >
              Video
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default async function ProjectCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const projectCategory = getCategoryWithProjects(category);

  if (!projectCategory) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-2 text-white selection:bg-cyan-300/20 md:pt-4">
      <main>
        <section
          className="section-wrapper"
          style={{
            backgroundImage: `${projectCategory.overlay}, url(${projectCategory.backgroundImage})`,
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

              <TechBadgeRow
                logos={projectCategory.logos}
                variant="minimal"
                labelMode="sr-only"
              />
            </div>

            <div className="mt-8 max-w-3xl">
              <h1 className="text-balance font-heading text-2xl text-white sm:text-5xl lg:text-6xl">
                {projectCategory.title}
              </h1>
              <p className="mt-4 max-w-2xl text-pretty text-sm leading-6 text-white/74">
                {projectCategory.pageIntro}
              </p>
            </div>

            <nav
              aria-label="Project categories"
              className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm sm:gap-x-5"
            >
              {projectCategories.map((categoryOption) => {
                const isActive = categoryOption.slug === projectCategory.slug;

                return (
                  <Link
                    key={categoryOption.slug}
                    href={`/projects/${categoryOption.slug}`}
                    aria-current={isActive ? 'page' : undefined}
                    className={`transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 ${
                      isActive
                        ? 'text-white underline decoration-white/50 underline-offset-8'
                        : 'text-white/56 hover:text-white'
                    }`}
                  >
                    {categoryOption.title}
                  </Link>
                  );
                })}
              </nav>
          </div>

          <div className="section-content pb-10 md:pb-14">
            {projectCategory.projects.map((project) => (
              <ProjectRow key={project.slug} project={project} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
