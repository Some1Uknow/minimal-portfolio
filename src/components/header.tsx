'use client';

import { TextEffect } from '@/components/ui/text-effect';
import { personalInfo } from '@/lib/data';

export function Header() {
  return (
    <header className="min-h-[45vh] flex flex-col justify-center px-4 md:px-6">
      <div className="max-w-3xl">
        <div className="mb-4">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/50 rounded-full">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            Available for opportunities
          </span>
        </div>

        <TextEffect
          as="h1"
          per="char"
          preset="fade-in-blur"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 mb-3"
          speedReveal={1.5}
          speedSegment={1.2}
        >
          {personalInfo.name}
        </TextEffect>

        <TextEffect
          as="p"
          per="word"
          preset="blur-sm"
          delay={0.4}
          className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-600 dark:text-zinc-400 mb-4"
          speedReveal={1.2}
        >
          {personalInfo.role}
        </TextEffect>

        <TextEffect
          as="p"
          per="word"
          preset="fade"
          delay={0.8}
          className="text-sm sm:text-base text-zinc-500 dark:text-zinc-500 max-w-xl mb-5 leading-relaxed"
          speedReveal={2}
        >
          {personalInfo.tagline}
        </TextEffect>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {personalInfo.highlights.map((highlight, index) => (
            <TextEffect
              key={highlight}
              as="span"
              per="word"
              preset="slide"
              delay={1.2 + index * 0.15}
              className="inline-block px-2 py-1 text-[10px] font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 rounded-md"
              speedReveal={2}
            >
              {highlight}
            </TextEffect>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-zinc-900 dark:bg-zinc-50 dark:text-zinc-900 rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 rounded-full hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
}
