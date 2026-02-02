import {
  SiSolana,
  SiRust,
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
  SiAmazonwebservices,
  SiDocker,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiRedis,
  SiDjango,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
} from 'react-icons/si';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export const personalInfo = {
  name: 'Raghav Sharma',
  role: 'Solana Program Engineer',
  location: 'Delhi, India',
  email: 'raghu250407@gmail.com',
  website: 'raghav.codes',
  tagline: 'Building the future of Internet Capital Markets on Solana',
  highlights: [
    'Solana Foundation Grant Recipient',
    'SIH24 Winner',
    'Superteam India Member',
  ],
};

export const aboutContent = {
  summary: `Solana engineer who builds, tests, and deploys on-chain Dapps using Rust, Anchor and TypeScript. I like educating new developers and onboarding them to the Solana ecosystem.`,
  achievement: `Received a $5,000 Solana Foundation Grant for LearnSol, a developer education platform with 1200+ users, 40+ GitHub stars, and 700+ coders. Featured in the Colosseum Codex Newsletter.`,
  expertise: `I obsess on production-ready Solana dapps (Rust + Anchor + Next + TS) with emphasis on taste and good performance.`,
};

export const skills = {
  blockchain: [
    { name: 'Solana', icon: <SiSolana className="text-[#9945FF]" /> },
    { name: 'Rust', icon: <SiRust className="text-white dark:text-white" /> },
    { name: 'Anchor', icon: <span className="text-xl">⚓</span> }, // No simple icon for Anchor yet
    { name: 'SPL Token', icon: <SiSolana className="text-green-400" /> },
  ],
  languages: [
    { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { name: 'Python', icon: <SiPython className="text-[#3776AB]" /> },
    { name: 'HTML5', icon: <SiHtml5 className="text-[#E34F26]" /> },
    { name: 'CSS3', icon: <SiCss3 className="text-[#1572B6]" /> },
  ],
  frameworks: [
    { name: 'React', icon: <SiReact className="text-[#61DAFB]" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" /> },
    { name: 'Node.js', icon: <SiNodedotjs className="text-[#339933]" /> },
    { name: 'Tailwind', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: 'Django', icon: <SiDjango className="text-[#092E20] dark:text-[#092E20]" /> },
  ],
  infrastructure: [
    { name: 'AWS', icon: <SiAmazonwebservices className="text-[#FF9900]" /> },
    { name: 'Docker', icon: <SiDocker className="text-[#2496ED]" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#4169E1]" /> },
    { name: 'Redis', icon: <SiRedis className="text-[#DC382D]" /> },
    { name: 'Git', icon: <SiGit className="text-[#F05032]" /> },
  ],
};

export const projects = [
  {
    title: 'Shadow DEX',
    slug: 'shadow',
    description:
      'ZK Gated swaps on Solana. Proves eligibility without revealing underlying data. Supports Min Balance, Token Holder, and Shielded Spend proofs.',
    tags: ['Noir', 'Sunspot', 'Rust', 'Anchor', 'Solana', 'Next.js'],
    highlight: 'ZK Privacy on Solana',
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
      'Developer education platform teaching how to build on Solana. AI-powered tutor with RAG, gamified learning with NFT rewards.',
    tags: ['TypeScript', 'Rust', 'Anchor', 'Next.js', 'PostgreSQL'],
    highlight: '$5,000 Solana Foundation Grant',
    metrics: '1200+ users • 40+ GitHub stars',
    image: '/projects/learnsolana.png',
    links: {
      live: 'https://learnsol.site',
      github: 'https://github.com/Some1Uknow/learn-solana',
    },
  },
  {
    title: 'Pigeon',
    slug: 'pigeon',
    description:
      'End-to-end encrypted messenger on Solana. X25519 key exchange with ChaCha20-Poly1305 encryption. Zero plaintext stored on-chain.',
    tags: ['Rust', 'Anchor', 'X25519', 'Next.js'],
    highlight: 'Live on Devnet',
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
      'Automated escrow system for freelance payments with clear transaction stages. PDA-based accounts with full state management.',
    tags: ['Rust', 'Anchor', 'SPL Token'],
    highlight: 'Deployed to Devnet',
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
      'NFT trading platform with listings, sales, and auctions. NFTs held in PDA vaults with cross-program calls for transfers.',
    tags: ['Rust', 'Anchor', 'TypeScript'],
    image: '/projects/pixelmart.png',
    highlight: 'Live on Devnet',
    links: {
      live: 'https://pixelmart.raghav.codes',
      github: 'https://github.com/Some1Uknow/NFT-marketplace',
    },
  },
  {
    title: 'EzDeploy',
    slug: 'ezdeploy',
    description:
      'Cloud deployment platform similar to Vercel. Build servers, API gateway, reverse proxy, and ECS container orchestration.',
    tags: ['TypeScript', 'Node.js', 'AWS ECS', 'Redis', 'PostgreSQL'],
    image: '/projects/ezdeploy.png',
    notLive: 'Not live due to AWS costs',
    links: {
      live: 'https://ezdeploy.raghav.codes',
      github: 'https://github.com/Some1Uknow/EzDeploy',
    },
  },
];

export const minorProjects = [
  {
    title: 'Solana Txn TUI',
    description:
      'A comprehensive Terminal User Interface for exploring Solana transactions, accounts, and wallets.',
    tags: ['Rust', 'Ratatui', 'Solana'],
    image: '/projects/solana-txn-tui.png',
    links: {
      github: 'https://github.com/Some1Uknow/solana-txn-tui',
    },
  },
  {
    title: 'CSV Clean',
    description: 'Browser-based CSV cleaning and processing tool.',
    tags: ['React', 'PapaParse', 'Tailwind'],
    image: '/projects/csvclean.png',
    links: {
      live: 'https://csvclean.app',
    },
  },
  {
    title: 'FastEdit',
    description: 'Fully client-side image editor with filters and adjustments.',
    tags: ['JavaScript', 'Canvas API'],
    image: '/projects/fastedit.png',
    links: {
      live: 'https://fastedit.raghav.codes',
      github: 'https://github.com/Some1Uknow/FastEdit-Fully_Client_side_image_editor',
    },
  },
];

export const experience = [
  {
    role: 'Founder',
    company: 'LearnSolana',
    period: 'Oct 2025 - Jan 2026',
    description:
      'Designed curriculum (50+ tutorials), games, coding exercises and built entire platform. Awarded $5,000 by Solana Foundation.',
  },
  {
    role: 'Software Engineering Intern',
    company: 'FOSSEE, IIT Bombay',
    period: 'Feb 2025 - May 2025',
    description:
      'Architected Django APIs for 2,000+ engineers, built 3D CAD visualization with React, and deployed Dockerized microservices with CI/CD.',
  },
  {
    role: 'Software Engineering Intern',
    company: 'Debales AI',
    period: 'Jul 2024 - Sep 2024',
    description:
      'Engineered data visualizations for 10,000+ AI insights, optimized image rendering via CDN, and built analytics-driven feedback for AI support agents.',
  },
];

export const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/Some1Uknow',
    handle: '@Some1Uknow',
    icon: <FaGithub />,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/raghavsharmaweb3',
    handle: 'raghavsharmaweb3',
    icon: <FaLinkedin />,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/Some1UKnow25',
    handle: '@Some1UKnow25',
    icon: <FaTwitter />,
  },
];

export const recognition = [
  {
    icon: '🏆',
    title: 'Solana Foundation Grant',
    description: '$5,000 for LearnSolana',
  },
  {
    icon: '📰',
    title: 'Colosseum Codex Newsletter',
    description: 'Featured for Solana education work',
  },
  {
    icon: '🥇',
    title: 'Smart India Hackathon 2024',
    description: 'Winner (SIH24)',
  },
];
