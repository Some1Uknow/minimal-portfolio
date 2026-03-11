import Image from 'next/image';
import { SiRust } from 'react-icons/si';

import type { ProjectLogo } from '@/lib/projects';

type TechBadgeProps = {
  logo: ProjectLogo;
  variant?: 'pill' | 'minimal';
  labelMode?: 'show' | 'sr-only' | 'hide';
};

function AnchorLogo() {
  return (
    <span className="relative h-5 w-5 shrink-0 overflow-hidden rounded-full">
      <Image
        src="/logos/anchor.png"
        alt=""
        aria-hidden="true"
        fill
        sizes="20px"
        className="object-contain rounded-full"
      />
    </span>
  );
}

function SolanaKitLogo() {
  return (
    <span className="relative h-5 w-5 shrink-0">
      <Image
        src="/logos/solana-kit-icon.svg"
        alt=""
        aria-hidden="true"
        fill
        sizes="20px"
        className="object-contain brightness-0 invert"
      />
    </span>
  );
}

const pillStyles: Record<ProjectLogo, string> = {
  anchor: 'text-cyan-100 bg-slate-950/35 border-white/15',
  rust: 'text-orange-50 bg-stone-950/35 border-white/15',
  'solana-kit': 'text-violet-50 bg-slate-950/35 border-white/15',
};

const minimalStyles: Record<ProjectLogo, string> = {
  anchor: 'text-cyan-100/90',
  rust: 'text-orange-50/90',
  'solana-kit': 'text-violet-100/90',
};

const badgeLabels: Record<ProjectLogo, string> = {
  anchor: 'Anchor',
  rust: 'Rust',
  'solana-kit': 'Solana Kit',
};

function LogoMark({ logo }: TechBadgeProps) {
  if (logo === 'anchor') {
    return <AnchorLogo />;
  }

  if (logo === 'solana-kit') {
    return <SolanaKitLogo />;
  }

  return <SiRust aria-hidden="true" className="h-4 w-4" />;
}

export function TechBadge({
  logo,
  variant = 'pill',
  labelMode = 'show',
}: TechBadgeProps) {
  const styles = variant === 'pill' ? pillStyles[logo] : minimalStyles[logo];

  return (
    <span
      className={
        variant === 'pill'
          ? `inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium tracking-[0.18em] uppercase ${styles}`
          : `inline-flex items-center gap-2 text-[0.68rem] font-medium tracking-[0.24em] uppercase ${styles}`
      }
    >
      <LogoMark logo={logo} />
      {labelMode === 'show' ? badgeLabels[logo] : null}
      {labelMode === 'sr-only' ? (
        <span className="sr-only">{badgeLabels[logo]}</span>
      ) : null}
    </span>
  );
}

export function TechBadgeRow({
  logos,
  variant = 'pill',
  labelMode = 'show',
}: {
  logos: ProjectLogo[];
  variant?: 'pill' | 'minimal';
  labelMode?: 'show' | 'sr-only' | 'hide';
}) {
  return (
    <div
      className={
        variant === 'pill'
          ? 'flex flex-wrap items-center gap-2'
          : 'flex flex-nowrap items-center gap-3 sm:gap-4'
      }
    >
      {logos.map((logo) => (
        <TechBadge
          key={logo}
          logo={logo}
          variant={variant}
          labelMode={labelMode}
        />
      ))}
    </div>
  );
}
