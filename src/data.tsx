import {
  Briefcase,
  Users,
  Award,
  Globe,
  GraduationCap,
  Palette,
  Camera,
  Code2,
} from "lucide-react"

/* ── Roles (animated header) ─────────────────────────────── */

export const ROLES = [
  "UI/UX Designer",
  "Graphics Designer",
  "Digital Creator",
  "AI Intern",
  "Prompt Writer",
]

/* ── Ticker bar items ────────────────────────────────────── */

export const TICKER_ITEMS = [
  "ICT Undergrad at BUP",
  "Graphics Designer",
  "Photography",
  "UI/UX Intern at FlyRankAI",
  "Team Leadership",
  "Team Management",
  "Public Speaking",
]

/* ── Languages ───────────────────────────────────────────── */

export const LANGS = [
  {
    n: "Bangla",
    l: "Native",
    p: 100,
    c: "var(--accent)",
    country: "Bangladesh",
    flag: "🇧🇩",
    cx: 170,
    cy: 125,
  },
  {
    n: "English",
    l: "Fluent",
    p: 100,
    c: "var(--accent2)",
    country: "Global",
    flag: "🌐",
    cx: 106,
    cy: 72,
  },
  {
    n: "Hindi",
    l: "Fluent",
    p: 100,
    c: "var(--green)",
    country: "India",
    flag: "🇮🇳",
    cx: 163,
    cy: 115,
  },
  {
    n: "Japanese",
    l: "Basic",
    p: 38,
    c: "var(--amber)",
    country: "Japan",
    flag: "🇯🇵",
    cx: 200,
    cy: 85,
  },
  {
    n: "German",
    l: "Basic",
    p: 32,
    c: "var(--accent)",
    country: "Germany",
    flag: "🇩🇪",
    cx: 118,
    cy: 68,
  },
]

/* ── Skills ──────────────────────────────────────────────── */

export const SKILL_CATS = [
  {
    title: "UI/UX & Design",
    icon: <Palette size={20} />,
    c: "var(--accent)",
    skills: [
      "Figma",
      "Canva",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "UX Research",
    ],
  },
  {
    title: "Media & Content",
    icon: <Camera size={20} />,
    c: "var(--accent2)",
    skills: [
      "Photography",
      "Videography",
      "CapCut",
      "InShot",
      "Content Creation",
    ],
  },
  {
    title: "Technology",
    icon: <Code2 size={20} />,
    c: "var(--amber)",
    skills: [
      "Basic Programming",
      "Microsoft Office",
      "Google Form",
      "Excel",
      "PowerPoint",
    ],
  },
  {
    title: "Leadership",
    icon: <Users size={20} />,
    c: "var(--green)",
    skills: [
      "Team Leadership",
      "Public Speaking",
      "Event Management",
      "Mentoring",
      "Communication",
    ],
  },
]

/* ── Experience ──────────────────────────────────────────── */

export type ExpEntry = {
  role: string
  org: string
  orgHref?: string
  period: string
  type: string
  category: "Internship" | "Clubs" | "Campus Ambassador"
  icon: React.ReactNode
  c: string
  desc: string
  responsibilities: string[]
  tags: string[]
}

export const EXP: ExpEntry[] = [
  {
    role: "UI/UX AI Intern",
    org: "FlyRank AI",
    orgHref: "https://internship.flyrank.ai/",
    period: "Jun 2026 — Present",
    type: "Internship",
    category: "Internship",
    icon: <Briefcase size={13} />,
    c: "var(--accent)",
    desc: "Contributing to AI-powered design solutions, crafting intuitive user interfaces, and integrating design thinking with artificial intelligence workflows to build next-generation marketing tools.",
    responsibilities: [
      "Designed and prototyped user interfaces for AI-driven marketing tools serving global clients",
      "Conducted usability testing and iterative UX research to optimize product flows",
      "Collaborated closely with engineers to deliver accessible, responsive UI components",
    ],
    tags: ["Figma", "UX Research", "Prototyping", "AI Tools", "UI Design"],
  },
  {
    role: "Vice President (Administration)",
    org: "BUP Robotics Club",
    orgHref: "https://www.facebook.com/share/1FTEHmPRYd/?mibextid=wwXIfr",
    period: "Jun 2026 — Present",
    type: "Leadership",
    category: "Clubs",
    icon: <Users size={13} />,
    c: "var(--accent2)",
    desc: "Overseeing internal operations, coordinating logistics, and managing daily functions for one of BUP's most active student technical societies with 200+ active members.",
    responsibilities: [
      "Managed administrative workflows, documentation, and cross-team coordination",
      "Organized intra-university robotics competitions, workshops, and STEM outreach events",
      "Supervised a team of 12 executive members across multiple project verticals",
    ],
    tags: ["Administration", "Team Management", "Event Planning", "Leadership"],
  },
  {
    role: "Assistant General Secretary",
    org: "BUP Infotech Club",
    orgHref: "https://www.facebook.com/share/1CwMcQAPBw/?mibextid=wwXIfr",
    period: "Aug 2026 — Present",
    type: "Leadership",
    category: "Clubs",
    icon: <Users size={13} />,
    c: "var(--amber)",
    desc: "Supporting executive leadership in driving tech-forward student initiatives, managing administrative communication, and fostering innovation within the campus technology community.",
    responsibilities: [
      "Coordinated between club departments to ensure smooth execution of tech events",
      "Drafted official correspondence, meeting minutes, and member communications",
      "Assisted in organizing national-level hackathons and tech symposiums",
    ],
    tags: [
      "Communication",
      "Organization",
      "Event Coordination",
      "Tech Community",
    ],
  },
  {
    role: "Former Advisor",
    org: "MCPSC Drum Club",
    orgHref: "https://www.facebook.com/mcpscdrumclub",
    period: "2022 — 2023",
    type: "Advisory",
    category: "Clubs",
    icon: <Award size={13} />,
    c: "var(--green)",
    desc: "Provided strategic guidance and mentorship to club leadership and members, helping foster a culture of creative expression through rhythm, music, and collaborative performance.",
    responsibilities: [
      "Mentored junior members on percussion techniques and stage performance",
      "Advised on club strategy, event programming, and inter-school collaborations",
      "Supported the club in achieving recognition at national school arts festivals",
    ],
    tags: ["Mentorship", "Creative Arts", "Advisory", "Music"],
  },
  {
    role: "Campus Ambassador",
    org: "InFlow",
    period: "2025 — Present",
    type: "Ambassador",
    category: "Campus Ambassador",
    icon: <Globe size={13} />,
    c: "var(--accent)",
    desc: "Actively representing InFlow at Bangladesh University of Professionals, driving student engagement, promoting programs, and building a vibrant campus community around the platform.",
    responsibilities: [
      "Promoted InFlow programs across campus through events, social media, and peer outreach",
      "Recruited and onboarded new student members, growing campus presence significantly",
      "Facilitated workshops and info sessions to connect students with InFlow opportunities",
    ],
    tags: ["Community Building", "Outreach", "Brand Ambassador", "Marketing"],
  },
  {
    role: "Former Campus Ambassador",
    org: "Prohora",
    period: "2021 — 2022",
    type: "Ambassador",
    category: "Campus Ambassador",
    icon: <Globe size={13} />,
    c: "var(--lavender)",
    desc: "Represented Prohora as a campus advocate, driving student awareness and participation in career development and youth empowerment initiatives across BUP.",
    responsibilities: [
      "Organized and hosted Prohora-sponsored career workshops and networking sessions",
      "Created campus-level awareness campaigns for youth development programs",
      "Acted as the primary liaison between Prohora headquarters and BUP student community",
    ],
    tags: [
      "Advocacy",
      "Career Development",
      "Youth Empowerment",
      "Campus Outreach",
    ],
  },
  {
    role: "Former Campus Ambassador",
    org: "Bangladesh Youth Enthusiast",
    period: "2021 — 2022",
    type: "Ambassador",
    category: "Campus Ambassador",
    icon: <Globe size={13} />,
    c: "var(--amber)",
    desc: "Championed Bangladesh Youth Enthusiast's mission at BUP by driving student participation in community development and national youth leadership programs.",
    responsibilities: [
      "Mobilized student volunteers for national community development initiatives",
      "Represented the organization at inter-university youth summits and conferences",
      "Built relationships between BUP students and the broader national youth network",
    ],
    tags: [
      "Youth Leadership",
      "Community Development",
      "Volunteer Coordination",
      "Networking",
    ],
  },
]

/* ── Projects ────────────────────────────────────────────── */

export const PROJECTS = [
  {
    name: "CrisisAssist",
    icon: <Globe size={22} />,
    c: "var(--accent)",
    desc: "A web-based Disaster Recovery and Crisis Management System designed to streamline emergency response, coordinate resources, and connect affected communities with aid providers in real time.",
    tags: ["Web App", "Crisis Management", "System Design"],
    href: "https://github.com/urSushi",
  },
  {
    name: "IIR Butterworth Filter",
    icon: <Code2 size={22} />,
    c: "var(--accent2)",
    desc: "Implementation of an IIR Butterworth Low-Pass Filter for Audio Noise Reduction using MatLab, delivering clean signal output through mathematically optimized frequency cutoff design.",
    tags: ["MatLab", "Signal Processing", "Audio Engineering"],
    href: "https://github.com/urSushi",
  },
  {
    name: "CPU Scheduling Simulator",
    icon: <Briefcase size={22} />,
    c: "var(--accent)",
    desc: "A modern, interactive tool for visualizing and comparing CPU scheduling algorithms — FCFS, SJF, Round Robin, and Priority — with animated Gantt charts and real-time performance metrics.",
    tags: ["Visualization", "OS Concepts", "Interactive UI"],
    href: "https://github.com/urSushi",
  },
]

/* ── Education ───────────────────────────────────────────── */

export const EDU = [
  {
    d: "BSc, Information & Communication Engineering",
    s: "Bangladesh University of Professionals",
    p: "2022 — Present",
    n: "Currently Studying",
    href: "https://bup.edu.bd/",
    icon: <GraduationCap size={17} />,
  },
  {
    d: "Higher Secondary Certificate (HSC)",
    s: "Mirpur Cantonment Public School & College",
    p: "2020 — 2021",
    n: "GPA 5.00 / 5.00",
    href: "https://mcpsc.edu.bd/",
    icon: <GraduationCap size={17} />,
  },
  {
    d: "Secondary School Certificate (SSC)",
    s: "Monipur High School & College",
    p: "2020",
    n: "GPA 5.00 / 5.00",
    href: "https://mubc.edu.bd/",
    icon: <GraduationCap size={17} />,
  },
]

import certAIInterview from "@/imports/certificate-AI_Interview_Simulator.pdf"
import certAiCareerEdge from "@/imports/certificate-ai-career-edge.pdf"
import certAiHacksCV from "@/imports/certificate-ai-hacks-for-a-winning-cv.pdf"
import certAiPoweredComm from "@/imports/certificate-ai-powered-communication.pdf"
import certAiProAptitude from "@/imports/certificate-ai-pro-aptitude-hacks.pdf"
import certAiSuperPres from "@/imports/certificate-aisuperpresentations.pdf"
import certBuildAts from "@/imports/certificate-build-ats-winning-cv.pdf"
import certCommunicateConf from "@/imports/certificate-communicate-with-confidence.pdf"
import certDataFound from "@/imports/certificate-data-foundations-with-ai.pdf"
import certZeroCode from "@/imports/certificate-zero-code-app-at-vibe-coding.pdf"
import cert4vbo from "@/imports/certificate-4vbo72o5owu8-1784135153.pdf"
import certAy54 from "@/imports/certificate-ay544p6vqz6s-1783886205.pdf"
import certCa8s from "@/imports/certificate-ca8sbfvpipc5-1784359453.pdf"
import certFh3t from "@/imports/certificate-fh3tush3yhza-1784243701.pdf"
import certMaxg from "@/imports/certificate-maxgybw8wncb-1784137424.pdf"
import certRpin from "@/imports/certificate-rpind6pcmzen-1784220682.pdf"
import certY9bv from "@/imports/certificate-y9bvpnpynatm-1784244537.pdf"
import certZasd from "@/imports/certificate-zasdu5quiqkv-1784222153.pdf"

export type Cert = {
  title: string
  issuer: string
  coIssuers?: string[]
  bg: string
  accent: string
  pdf: string
}

export const CERTS: Cert[] = [
  /* ── Anthropic ───────────────────────────────────────────── */
  {
    title: "AI Fluency for Nonprofits",
    issuer: "Anthropic",
    coIssuers: ["GivingTuesday"],
    bg: "#d4f5e9",
    accent: "#1a7a56",
    pdf: certY9bv,
  },
  {
    title: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic",
    coIssuers: [
      "University College Cork",
      "Ringling College",
      "Higher Education Authority",
      "National Forum",
    ],
    bg: "#c8e6c9",
    accent: "#2e7d32",
    pdf: certAy54,
  },
  {
    title: "Claude 101",
    issuer: "Anthropic",
    bg: "#f5f0e8",
    accent: "#7a5c2e",
    pdf: cert4vbo,
  },
  {
    title: "Claude Code 101",
    issuer: "Anthropic",
    bg: "#1a2e22",
    accent: "#4caf8a",
    pdf: certMaxg,
  },
  {
    title: "Claude Code in Action",
    issuer: "Anthropic",
    bg: "#1e2d1e",
    accent: "#5dba7d",
    pdf: certFh3t,
  },
  {
    title: "Claude Platform 101",
    issuer: "Anthropic",
    bg: "#dde8f5",
    accent: "#2055a8",
    pdf: certRpin,
  },
  {
    title: "Claude with the Anthropic API",
    issuer: "Anthropic",
    bg: "#e3ecfa",
    accent: "#1c4db5",
    pdf: certCa8s,
  },
  {
    title: "Introduction to Claude",
    issuer: "Anthropic",
    bg: "#ede8f5",
    accent: "#6b3fa0",
    pdf: certZasd,
  },
  /* ── Grameenphone Academy ───────────────────────────────── */
  {
    title: "AI Career Edge",
    issuer: "Grameenphone Academy",
    bg: "#e8f4fd",
    accent: "#0077b6",
    pdf: certAiCareerEdge,
  },
  {
    title: "AI Hacks for a Winning CV",
    issuer: "Grameenphone Academy",
    bg: "#fef3e2",
    accent: "#d4730a",
    pdf: certAiHacksCV,
  },
  {
    title: "AI Interview Simulator",
    issuer: "Grameenphone Academy",
    bg: "#edf7f0",
    accent: "#1a7a44",
    pdf: certAIInterview,
  },
  {
    title: "AI-Powered Communication",
    issuer: "Grameenphone Academy",
    bg: "#f3eefa",
    accent: "#6930c3",
    pdf: certAiPoweredComm,
  },
  {
    title: "AI Pro Aptitude Hacks",
    issuer: "Grameenphone Academy",
    bg: "#fde8f0",
    accent: "#b5184e",
    pdf: certAiProAptitude,
  },
  {
    title: "AI Super Presentations",
    issuer: "Grameenphone Academy",
    bg: "#e8f0fd",
    accent: "#1a4db5",
    pdf: certAiSuperPres,
  },
  {
    title: "Build ATS-Winning CV",
    issuer: "Grameenphone Academy",
    bg: "#fdf5e2",
    accent: "#b58a0a",
    pdf: certBuildAts,
  },
  {
    title: "Communicate with Confidence",
    issuer: "Grameenphone Academy",
    bg: "#e2fdf8",
    accent: "#0a8a72",
    pdf: certCommunicateConf,
  },
  {
    title: "Data Foundations with AI",
    issuer: "Grameenphone Academy",
    bg: "#eaf2ff",
    accent: "#1855cc",
    pdf: certDataFound,
  },
  {
    title: "Zero-Code App at Vibe Coding",
    issuer: "Grameenphone Academy",
    bg: "#f0fde8",
    accent: "#2a7a0a",
    pdf: certZeroCode,
  },
]
