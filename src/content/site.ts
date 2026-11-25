// All the text on the site lives here. Edit this file to make the portfolio yours.
// Everything marked "TODO" is placeholder content.

export const site = {
  name: "Your Name", // TODO
  role: "Developer & Builder", // TODO
  location: "City, Country", // TODO
  // Used for <title>, link previews and the canonical URL once deployed.
  url: "https://your-domain.vercel.app", // TODO: set after first Vercel deploy
  tagline:
    "I build useful software and care about the details that make it feel right.", // TODO
  available: true, // shows an "Open to work" line in the hero

  about: [
    // TODO: two or three short paragraphs
    "I'm a developer who enjoys turning rough ideas into working products. Most of my time goes into web apps, tooling and the occasional side project that gets out of hand.",
    "Before this I studied computer science, and I've since worked across frontend, backend and infrastructure. I like small teams, clear writing and shipping often.",
  ],

  projects: [
    // TODO: replace with your own work. `href` = live demo, `repo` = source code. Both optional.
    {
      title: "Project One",
      description:
        "A short sentence on what it does and who it's for. Mention the problem it solves.",
      tags: ["Next.js", "TypeScript", "PostgreSQL"],
      href: "https://example.com",
      repo: "https://github.com/your-username/project-one",
      year: "2026",
    },
    {
      title: "Project Two",
      description:
        "A command-line tool that automates something tedious. Say how much time it saves.",
      tags: ["Python", "CLI"],
      repo: "https://github.com/your-username/project-two",
      year: "2025",
    },
    {
      title: "Project Three",
      description:
        "A design or research piece. Link to a write-up if there's no live version.",
      tags: ["Research", "Writing"],
      href: "https://example.com",
      year: "2025",
    },
  ] as Project[],

  experience: [
    // TODO: most recent first
    {
      role: "Software Engineer",
      company: "Company Name",
      period: "2024 — Present",
      summary:
        "What you owned, what you shipped, and one number that shows the impact.",
    },
    {
      role: "Junior Developer",
      company: "Another Company",
      period: "2022 — 2024",
      summary: "Main responsibilities and a highlight or two.",
    },
  ],

  skills: {
    // TODO: group however makes sense for you
    Languages: ["TypeScript", "Python", "Go", "SQL"],
    Frameworks: ["React", "Next.js", "Node.js", "Tailwind CSS"],
    Tools: ["Git", "Docker", "Linux", "Vercel", "Figma"],
  } as Record<string, string[]>,

  contact: {
    email: "you@example.com", // TODO
    links: [
      // TODO: remove any you don't use
      { label: "GitHub", href: "https://github.com/your-username" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/your-username" },
      { label: "X / Twitter", href: "https://x.com/your-username" },
    ],
  },
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
  year?: string;
};
