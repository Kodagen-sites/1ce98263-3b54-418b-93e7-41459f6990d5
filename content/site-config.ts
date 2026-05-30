// ============================================================
// site-config.ts — single source of truth for all copy + brand
// Pallas — AI workforce / AI employees. Pearl & Platinum light theme.
// ============================================================

export const siteConfig = {
  company: {
    name: "Pallas",
    tagline: "An AI workforce that runs your business while you sleep.",
    description:
      "Pallas builds AI employees that handle support, sales, research, and operations — onboarded in minutes, working around the clock, scaling without headcount.",
    email: "hello@pallas.ai",
    phone: "",
    location: "Remote — worldwide",
  },

  brand: {
    primary: "#3A3D45",
    accent: "#9CA0A8",
    bg: "#FBFBFA",
  },

  typography: {
    display: "Bricolage Grotesque",
    body: "Inter",
    mono: "JetBrains Mono",
  },

  seo: {
    siteUrl: "https://pallas.ai",
    locale: "en_US",
    htmlLang: "en",
    defaultTitle: "Pallas — An AI workforce for every business",
    defaultDescription:
      "Pallas builds AI employees that handle support, sales, research, and operations — onboarded in minutes and working around the clock.",
    defaultOgImage:
      "https://zykgxmubadvmlxpkqrzd.supabase.co/storage/v1/object/public/site-assets/1ce98263-3b54-418b-93e7-41459f6990d5/images/og-image.png",
    twitterHandle: "@pallas",
    noindexPaths: ["/admin", "/api"],
  },

  socials: {
    linkedin: "https://www.linkedin.com/company/pallas",
    x: "https://x.com/pallas",
    youtube: "https://www.youtube.com/@pallas",
  },

  // Static hero fallback (the scrub hero uses chapters in page.tsx)
  hero: {
    h1: [
      { text: "Meet your", accent: false },
      { text: "AI workforce", accent: true },
      { text: "", accent: false },
    ],
  },

  tagline: "An AI workforce that runs your business while you sleep.",

  servicesHeading: "The team you can hire today",

  // AI employee roles — rendered as a bento grid (#services)
  services: [
    {
      name: "Support Agent",
      slug: "support-agent",
      description:
        "Resolves tickets, answers questions, and de-escalates — across email, chat, and voice, in every timezone, instantly.",
    },
    {
      name: "Sales Development Rep",
      slug: "sales-development-rep",
      description:
        "Researches accounts, writes outreach that sounds human, books meetings, and never lets a lead go cold.",
    },
    {
      name: "Operations Analyst",
      slug: "operations-analyst",
      description:
        "Watches your dashboards, flags anomalies, reconciles data, and turns messy spreadsheets into decisions.",
    },
    {
      name: "Research Associate",
      slug: "research-associate",
      description:
        "Reads the internet so you don't have to — market scans, competitor briefs, and sourced summaries on demand.",
    },
    {
      name: "Recruiting Coordinator",
      slug: "recruiting-coordinator",
      description:
        "Screens applicants, schedules interviews, and keeps every candidate warm with timely, personal replies.",
    },
    {
      name: "Finance Assistant",
      slug: "finance-assistant",
      description:
        "Categorizes expenses, chases invoices, and prepares clean monthly reports your accountant will love.",
    },
  ],

  whyUs: {
    heading: "Why teams switch to Pallas",
    items: [
      {
        title: "Onboarded in minutes",
        description:
          "Describe the job in plain English. Pallas reads your docs, tools, and tone, then starts working — no integration project required.",
      },
      {
        title: "Always on, never tired",
        description:
          "Your AI employees work nights, weekends, and holidays at a fraction of the cost of a single hire — and scale the moment you need more.",
      },
      {
        title: "Stays in its lane",
        description:
          "Guardrails, approvals, and full audit trails mean every action is reviewable. You stay in control; Pallas does the work.",
      },
    ],
  },

  process: [
    {
      step: 1,
      title: "Describe the role",
      description:
        "Tell Pallas what the job is, the tools it touches, and where it should ask before acting.",
    },
    {
      step: 2,
      title: "Connect the tools",
      description:
        "One-click access to your helpdesk, CRM, inbox, and data — read-only until you say otherwise.",
    },
    {
      step: 3,
      title: "Review the first shift",
      description:
        "Watch the work happen in real time, approve actions, and tune the playbook in a few clicks.",
    },
    {
      step: 4,
      title: "Let it run",
      description:
        "Hand over the keys. Your AI employee works around the clock and reports back like any great teammate.",
    },
  ],

  stats: [
    { value: "24", label: "Hours a day on shift" },
    { value: "8", label: "Minutes to onboard" },
    { value: "70", label: "% lower cost per task" },
    { value: "12", label: "Roles ready to hire" },
  ],

  features: [
    {
      title: "Human-in-the-loop",
      description: "Approvals and guardrails on every sensitive action.",
    },
    {
      title: "Full audit trail",
      description: "Every decision logged, sourced, and reviewable.",
    },
    {
      title: "Your tools, connected",
      description: "Helpdesk, CRM, inbox, and data — natively.",
    },
  ],

  cta: {
    primary: "Join the waitlist",
    secondary: "See the roles",
  },

  ctaBlock: {
    heading: "Build your AI workforce",
    description:
      "Be first in line when Pallas opens. Join the waitlist and we'll help you hire your first AI employee.",
  },

  trustBar: [
    "Support",
    "Sales",
    "Operations",
    "Research",
    "Recruiting",
    "Finance",
  ],

  social: {
    linkedin: "https://www.linkedin.com/company/pallas",
    x: "https://x.com/pallas",
    youtube: "https://www.youtube.com/@pallas",
  },

  scrollHero: {
    archetype: "G" as const,
    styleId: "S11",
    assetMode: "live-generate" as const,
    imageUrl:
      "https://zykgxmubadvmlxpkqrzd.supabase.co/storage/v1/object/public/site-assets/1ce98263-3b54-418b-93e7-41459f6990d5/images/scene-1-start.png",
    frameCount: 288,
    scrollDistance: 6,
  },

  headerVariant: "pill-floating" as const,

  motion: {
    scrollProgress: true,
    cursorFollower: false,
    intensity: "medium" as const,
  },
} as const;

export type SiteConfig = typeof siteConfig;
