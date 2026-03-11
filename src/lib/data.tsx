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
  summary: `I build Solana products with taste, precision and clean execution.`,
};

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
