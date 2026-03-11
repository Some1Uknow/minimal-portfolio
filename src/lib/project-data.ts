export type ProjectSlug =
  | 'cpmm'
  | 'escrow'
  | 'shadow'
  | 'learnsolana'
  | 'pigeon'
  | 'safeprotocol'
  | 'pixelmart'
  | 'rayscan'
  | 'observer'
  | 'solana-txn-tui';

export type ProjectCategorySlug =
  | 'solana-programs'
  | 'solana-full-stack-dapps'
  | 'rust-projects';

export type ProjectLogo = 'anchor' | 'rust' | 'solana-kit';

export type ProjectLinkSet = {
  live?: string;
  github?: string;
  video?: string;
};

export type ProjectEntry = {
  title: string;
  slug: ProjectSlug;
  description: string;
  tags: string[];
  image: string;
  highlight?: string;
  metrics?: string;
  links: ProjectLinkSet;
};

export type ProjectCategory = {
  slug: ProjectCategorySlug;
  title: string;
  eyebrow: string;
  description: string;
  pageIntro: string;
  backgroundImage: string;
  overlay: string;
  logos: ProjectLogo[];
  projects: ProjectEntry[];
};

export const projectCategories: ProjectCategory[] = [
  {
    slug: 'solana-programs',
    title: 'Solana Programs',
    eyebrow: 'On-chain systems',
    description:
      'Anchor-based programs focused on PDA design, account constraints, CPI flows, and serious state machines.',
    pageIntro:
      'A focused view of the programs where the on-chain model is the product: escrow flows, privacy rails, encrypted messaging, and NFT market logic.',
    backgroundImage: '/bg-6.jpg',
    overlay:
      'linear-gradient(135deg, rgba(9, 14, 27, 0.92), rgba(20, 83, 45, 0.64))',
    logos: ['anchor', 'rust'],
    projects: [
      {
        title: 'CPMM',
        slug: 'cpmm',
        description:
          'Constant product market maker on Solana with pool initialization, liquidity management, exact-input swaps, and LiteSVM-backed test coverage.',
        tags: ['Rust', 'Anchor', 'AMM', 'Liquidity', 'Swap'],
        highlight: 'Constant product liquidity engine',
        image: '/projects/shadow-dex.png',
        links: {
          github: 'https://github.com/Some1Uknow/cpmm',
        },
      },
      {
        title: 'Escrow',
        slug: 'escrow',
        description:
          'Production-minded fixed-price token escrow with make, take, and cancel flows, vault custody, and atomic settlement.',
        tags: ['Rust', 'Anchor', 'Escrow', 'Vaults'],
        highlight: 'Atomic token settlement',
        image: '/projects/freelance-escrow.png',
        links: {
          github: 'https://github.com/Some1Uknow/escrow',
        },
      },
    ],
  },
  {
    slug: 'solana-full-stack-dapps',
    title: 'Solana Full Stack Dapps',
    eyebrow: 'Wallet to UI',
    description:
      'Products that connect protocol logic, wallet UX, indexing, and polished frontends into one coherent Solana experience.',
    pageIntro:
      'These are complete Solana applications, spanning program logic, transaction orchestration, frontend systems, and user-facing product decisions.',
    backgroundImage: '/bg-7.jpg',
    overlay:
      'linear-gradient(135deg, rgba(41, 16, 72, 0.88), rgba(12, 74, 110, 0.62))',
    logos: ['solana-kit', 'anchor'],
    projects: [
      {
        title: 'Shadow DEX',
        slug: 'shadow',
        description:
          'ZK gated swaps on Solana with proof-based access control for balances, token ownership, and shielded spend flows.',
        tags: ['Noir', 'Sunspot', 'Rust', 'Anchor', 'Next.js'],
        highlight: 'Privacy-preserving Solana trading',
        image: '/projects/shadow-dex.png',
        links: {
          live: 'https://shadow-dex.fly.dev',
          github: 'https://github.com/Some1Uknow/shadow',
          video: 'https://youtube.com/embed/2DjVA-KAT3Y',
        },
      },
      {
        title: 'LearnSolana',
        slug: 'learnsolana',
        description:
          'Developer education platform for learning Solana end to end, with AI-assisted tutoring, guided exercises, and reward loops.',
        tags: ['TypeScript', 'Rust', 'Anchor', 'Next.js', 'PostgreSQL'],
        highlight: 'Solana Foundation grant-backed platform',
        metrics: '1200+ users and 40+ GitHub stars',
        image: '/projects/learnsolana.png',
        links: {
          live: 'https://learnsol.site',
          github: 'https://github.com/Some1Uknow/learn-solana',
        },
      },
      {
        title: 'Rayscan',
        slug: 'rayscan',
        description:
          'Search-first Solana explorer with live transaction visibility, indexed reads, clean detail pages, and a split web API plus indexer architecture.',
        tags: ['Next.js', 'Fastify', 'PostgreSQL', 'Docker', 'Solana'],
        highlight: 'Search-first explorer',
        image: '/projects/pixelmart.png',
        links: {
          github: 'https://github.com/Some1Uknow/rayscan',
        },
      },
      {
        title: 'Pigeon',
        slug: 'pigeon',
        description:
          'End-to-end encrypted messenger on Solana using X25519 key exchange and ChaCha20-Poly1305, with no plaintext stored on-chain.',
        tags: ['Rust', 'Anchor', 'Next.js', 'Encryption'],
        highlight: 'Encrypted messaging on Solana',
        image: '/projects/pigeon.png',
        links: {
          live: 'https://pigeon.raghav.codes',
          github: 'https://github.com/Some1Uknow/pigeon',
          video: 'https://youtube.com/embed/ZA4iPDBXhUE',
        },
      },
      {
        title: 'SafeProtocol',
        slug: 'safeprotocol',
        description:
          'Freelance payments product built around escrowed transaction stages and a cleaner user-facing flow for secure settlements.',
        tags: ['Next.js', 'Solana', 'Anchor', 'Escrow'],
        highlight: 'Escrow product layer',
        image: '/projects/freelance-escrow.png',
        links: {
          live: 'https://escrowprotocol.raghav.codes',
          github: 'https://github.com/Some1Uknow/freelance_escrow',
        },
      },
      {
        title: 'PixelMart',
        slug: 'pixelmart',
        description:
          'NFT marketplace with listings, sales, auctions, PDA vault custody, and cross-program transfer flows for Solana assets.',
        tags: ['Rust', 'Anchor', 'TypeScript', 'NFT'],
        highlight: 'Marketplace logic backed by PDA vaults',
        image: '/projects/pixelmart.png',
        links: {
          live: 'https://pixelmart.raghav.codes',
          github: 'https://github.com/Some1Uknow/NFT-marketplace',
        },
      },
    ],
  },
  {
    slug: 'rust-projects',
    title: 'Rust Projects',
    eyebrow: 'Performance and systems',
    description:
      'Rust-heavy builds across Solana infrastructure, protocol logic, and terminal tooling where correctness and control matter.',
    pageIntro:
      'The Rust work spans on-chain programs and local tooling, with a bias toward deterministic behavior, explicit state, and fast feedback loops.',
    backgroundImage: '/bg-8.jpg',
    overlay:
      'linear-gradient(135deg, rgba(28, 25, 23, 0.9), rgba(120, 53, 15, 0.58))',
    logos: ['rust'],
    projects: [
      {
        title: 'Observer',
        slug: 'observer',
        description:
          'Self-hosted Solana observability indexer that tracks blocks, transactions, errors, fees, and compute usage with crash-safe Postgres persistence.',
        tags: ['Rust', 'PostgreSQL', 'Indexer', 'Observability'],
        highlight: 'Solana network observability',
        image: '/projects/solana-txn-tui.png',
        links: {
          github: 'https://github.com/Some1Uknow/observer',
        },
      },
      {
        title: 'Solana Txn TUI',
        slug: 'solana-txn-tui',
        description:
          'Terminal-first explorer for Solana transactions, accounts, and wallets built with Rust and Ratatui for fast operator workflows.',
        tags: ['Rust', 'Ratatui', 'Solana', 'CLI'],
        highlight: 'Rust tooling for chain operators',
        image: '/projects/solana-txn-tui.png',
        links: {
          github: 'https://github.com/Some1Uknow/solana-txn-tui',
        },
      },
    ],
  },
];
