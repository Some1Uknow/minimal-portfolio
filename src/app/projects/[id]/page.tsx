'use client';

import { use } from 'react';
import Link from 'next/link';
import { projects } from '@/lib/data';
import { notFound } from 'next/navigation';

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const project = projects.find((p: any) => p.slug === id);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-black text-white selection:bg-white/20">
            <main className="max-w-7xl mx-auto px-6 py-12 md:py-24">
                <Link
                    href="/"
                    className="inline-flex items-center text-sm text-zinc-400 hover:text-white transition-colors mb-12"
                >
                    ← Back to Projects
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-4xl md:text-6xl font-heading mb-6 tracking-tight">
                                {project.title}
                            </h1>
                            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light">
                                {project.description}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag: string) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 text-xs border border-zinc-800 rounded-full text-zinc-400"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-6 pt-4">
                            {project.links.live && (
                                <a
                                    href={project.links.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-medium hover:underline flex items-center gap-1"
                                >
                                    Live Demo ↗
                                </a>
                            )}
                            {project.links.github && (
                                <a
                                    href={project.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-medium hover:underline flex items-center gap-1"
                                >
                                    Source Code ↗
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="relative aspect-video rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl">
                        {project.links.video ? (
                            <iframe
                                src={project.links.video}
                                className="absolute inset-0 w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center text-zinc-500">
                                No video available for this project.
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
