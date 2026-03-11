'use client';

import Image from 'next/image';
import {
  SiAmazonwebservices,
  SiDocker,
  SiGit,
  SiNextdotjs,
  SiPostgresql,
  SiRedis,
  SiRust,
  SiSolana,
  SiTypescript,
} from 'react-icons/si';

type SkillItem = {
  name: string;
  icon: React.ReactNode;
};

const aboutSkills: SkillItem[] = [
  {
    name: 'Solana',
    icon: <SiSolana aria-hidden="true" className="h-4 w-4 text-[#8B5CF6]" />,
  },
  {
    name: 'Rust',
    icon: <SiRust aria-hidden="true" className="h-4 w-4 text-white" />,
  },
  {
    name: 'Anchor',
    icon: (
      <span className="relative h-4 w-4 shrink-0 overflow-hidden rounded-full">
        <Image
          src="/logos/anchor.png"
          alt=""
          aria-hidden="true"
          fill
          sizes="16px"
          className="object-contain rounded-full"
        />
      </span>
    ),
  },
  {
    name: 'Solana Kit',
    icon: (
      <span className="relative h-4 w-4 shrink-0">
        <Image
          src="/logos/solana-kit-icon.svg"
          alt=""
          aria-hidden="true"
          fill
          sizes="16px"
          className="object-contain brightness-0 invert"
        />
      </span>
    ),
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript aria-hidden="true" className="h-4 w-4 text-[#3178C6]" />,
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs aria-hidden="true" className="h-4 w-4 text-white" />,
  },
  {
    name: 'PostgreSQL',
    icon: <SiPostgresql aria-hidden="true" className="h-4 w-4 text-[#4169E1]" />,
  },
  {
    name: 'Redis',
    icon: <SiRedis aria-hidden="true" className="h-4 w-4 text-[#DC382D]" />,
  },
  {
    name: 'Git',
    icon: <SiGit aria-hidden="true" className="h-4 w-4 text-[#F05032]" />,
  },
  {
    name: 'AWS',
    icon: <SiAmazonwebservices aria-hidden="true" className="h-4 w-4 text-[#FF9900]" />,
  },
  {
    name: 'Docker',
    icon: <SiDocker aria-hidden="true" className="h-4 w-4 text-[#2496ED]" />,
  },
];

export function SkillStrip() {
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-white/78">
      {aboutSkills.map((skill) => (
        <span
          key={skill.name}
          className="inline-flex items-center gap-2 transition-transform duration-300 ease-out hover:-translate-y-0.5"
        >
          {skill.icon}
          <span>{skill.name}</span>
        </span>
      ))}
    </div>
  );
}
