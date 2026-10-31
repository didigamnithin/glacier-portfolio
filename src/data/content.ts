export const site = {
  name: "Nithin Didigam",
  avatar: "/nithin.jpeg",
  bio: "Engineer turned builder. I ship AI products solo, from India — agents, experiments, and code that turns into cashflow.",
  email: "nithin.didigam@gmail.com",
  copyright: "© 2026 Nithin Didigam",
};

export const philosophy = [
  "I build AI products, experiment fast, and turn code into cashflows. Agents that work while I sleep. Experiments on the internet. Shipping beats planning.",
  "Learned how to think at IIT Kanpur — mathematical foundations, problem-solving under pressure. Everything after is applied building.",
  "Philosophy: ship in public, compound small wins, automate what repeats, and treat every project as a bet with a learning dividend.",
];

export const socialLinks = [
  { label: "X", href: "https://x.com/soul4tech" },
  { label: "LinkedIn", href: "https://linkedin.com/in/didigamnithin" },
  { label: "GitHub", href: "https://github.com/nhancio/" },
  { label: "Instagram", href: "https://www.instagram.com/didigam.nithin/" },
  { label: "WhatsApp", href: "https://wa.me/917095288950" },
] as const;

export type TimelineEntry = {
  label: string;
  title: string;
  date: string;
  body: string;
};

export const career: TimelineEntry[] = [
  {
    label: "AI Consultant",
    title: "Independent",
    date: "Current",
    body: "Building agents that work while I sleep. Running experiments on the internet. Turning code into cashflows.",
  },
  {
    label: "Solo Builder",
    title: "Indie Hacker",
    date: "Always",
    body: "Shipping products solo and in public. 11+ apps launched, small bets compounding into bigger wins. Code is the product, the internet is the distribution.",
  },
  {
    label: "AI/ML Engineering",
    title: "Tanla Platforms",
    date: "Past",
    body: "Automation and analytics at scale. Processing massive data volumes efficiently. Reduced costs massively through architectural optimizations.",
  },
  {
    label: "Product & Integrations",
    title: "Sprinklr",
    date: "Past",
    body: "Enterprise SaaS systems. Built resilient products with global engineering teams, driving core integrations and scale.",
  },
  {
    label: "Data & Scale",
    title: "Myntra",
    date: "Past",
    body: "Data engineering at one of India's largest e-commerce platforms. Handled high-throughput data pipelines and infrastructure.",
  },
  {
    label: "Foundation",
    title: "IIT Kanpur",
    date: "Education",
    body: "Learned how to think. Built the mathematical foundation for everything after. Honed problem-solving under extreme constraints.",
  },
  {
    label: "Hackathon Winner",
    title: "Global AI Summit 2024",
    date: "2024",
    body: "Built Flatmates, an AI-driven app to match users with perfect roommates using complex preference analysis. Awarded ₹5 lakh first prize.",
  },
  {
    label: "Founder",
    title: "Nhancio AI Agency",
    date: "2023",
    body: "Founded and lead an AI agency specializing in data science, intelligent agents, and automated marketing workflows.",
  },
];

export type Project = {
  title: string;
  description: string;
  href: string;
  icon: string;
  iconBg: string;
};

export const projects: Project[] = [
  {
    title: "Nhancio",
    description: "AI agency for data science, intelligent agents, and marketing automation.",
    href: "https://nhancio.com",
    icon: "N",
    iconBg: "#6366f1",
  },
  {
    title: "Homemates",
    description: "Agentic OS for real estate — AI calling and WhatsApp agents for teams.",
    href: "#",
    icon: "H",
    iconBg: "#0ea5e9",
  },
  {
    title: "BiteBoost",
    description: "Modern food delivery platform built with React and Tailwind.",
    href: "#",
    icon: "B",
    iconBg: "#f97316",
  },
  {
    title: "Aura",
    description: "Gen Z habit tracker with aura points and streak mechanics.",
    href: "#",
    icon: "A",
    iconBg: "#a855f7",
  },
  {
    title: "Thryft",
    description: "Sustainable fashion marketplace for second-hand luxury.",
    href: "https://github.com/nhancio/thryft",
    icon: "T",
    iconBg: "#10b981",
  },
  {
    title: "TradeBot",
    description: "AI-ready trading bot using Zerodha Kite Connect API.",
    href: "https://github.com/nhancio/tradebot",
    icon: "↗",
    iconBg: "#ec4899",
  },
  {
    title: "Rava",
    description: "Fashion reels platform connecting influencers and brands.",
    href: "https://github.com/nhancio/ReelBazar",
    icon: "R",
    iconBg: "#ef4444",
  },
  {
    title: "MagicBoxAI",
    description: "AI content creation for digital avatars and social media.",
    href: "https://github.com/nhancio/magicboxai",
    icon: "M",
    iconBg: "#f59e0b",
  },
  {
    title: "Jobz",
    description: "Job matching app with swipe UI, powered by Gemini AI.",
    href: "https://github.com/nhancio/Jobz",
    icon: "J",
    iconBg: "#14b8a6",
  },
  {
    title: "TrackYou",
    description: "Zero-manual-entry expense tracker using AI to parse bank SMS.",
    href: "#",
    icon: "₹",
    iconBg: "#64748b",
  },
  {
    title: "Yell AI",
    description: "Managed WhatsApp AI assistant deployment platform.",
    href: "#",
    icon: "Y",
    iconBg: "#8b5cf6",
  },
];

export const metrics = [
  { value: "12–55×", label: "Cost reduction in AI" },
  { value: "100+", label: "Campaigns automated" },
  { value: "500M+", label: "Data points analyzed" },
  { value: "1st", label: "Global hackathon finish" },
] as const;

export type Post = {
  date: string;
  title: string;
  excerpt: string;
  href: string;
  tags: string[];
};

export const posts: Post[] = [
  {
    date: "March 1, 2026",
    title: "Building in Public: Why I Share Everything",
    excerpt:
      "From IIT Kanpur to indie hacking — how shipping agents, running experiments, and sharing wins (and failures) compounds learning faster than building in silence.",
    href: "https://x.com/soul4tech",
    tags: ["indie-hacking", "building-in-public"],
  },
];
