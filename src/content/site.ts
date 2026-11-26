// All the text on the site lives here. Edit this file to change the portfolio.

export const site = {
  name: "Khizar Ali Shah",
  handle: "eros98",
  role: "Penetration Tester & Security Engineer",
  location: "Islamabad, Pakistan",
  // Used for link previews and the canonical URL. Change it if you deploy to a different address.
  url: "https://eros-98.vercel.app",
  tagline: "I find the security bugs in open source before attackers do.",

  stats: [
    { value: "10", label: "CVEs credited" },
    { value: "~290M", label: "weekly downloads across affected npm packages" },
    { value: "5", label: "open-source projects patched" },
  ],

  about: [
    "I'm a penetration tester and security engineer at Shellvoide, working across web, API, network and AWS cloud security. Outside client work I hunt for vulnerabilities in open-source software and report them through coordinated disclosure.",
    "I'm co-credited on 10 published CVEs in projects including axios, follow-redirects, Meta's Hydra, kin-openapi and YesWiki. My findings range from credential leaks in HTTP redirect handling and prototype-pollution gadgets to configuration-driven code execution and denial-of-service bugs in API validation, including an incomplete patch I traced back to three unfixed crash paths.",
    "I care about making security research useful to maintainers: clear reports, working proofs of concept and help verifying fixes. I've published research on threat modelling attacks against vehicle digital twins (Smart Cities, MDPI), and I'm completing a B.S. in Cyber Security at Air University, Islamabad.",
  ],

  // Security advisories credited to eros938 on GitHub, grouped by project.
  advisories: [
    {
      project: "axios",
      ecosystem: "npm",
      usage: "~146M weekly downloads",
      items: [
        {
          cve: "CVE-2026-101902",
          ghsa: "GHSA-9fr6-4gfg-395g",
          title: "Prototype-pollution gadget in the default instance lets an inherited method override the HTTP method",
          severity: "medium",
          role: "Analyst",
        },
      ],
    },
    {
      project: "follow-redirects",
      ecosystem: "npm",
      usage: "~145M weekly downloads",
      items: [
        {
          cve: "CVE-2026-111755",
          ghsa: "GHSA-8r9p-f939-6h3c",
          title: "sensitiveHeaders regex escaping can expose credential headers",
          severity: "high",
          role: "Analyst",
        },
        {
          cve: "CVE-2026-111756",
          ghsa: "GHSA-q3jh-wrc6-jgq8",
          title: "Array-form headers bypass cross-origin credential stripping",
          severity: "high",
          role: "Analyst",
        },
      ],
    },
    {
      project: "Hydra (Meta)",
      ecosystem: "PyPI",
      usage: "~4.3M weekly downloads",
      items: [
        {
          cve: "CVE-2026-106441",
          ghsa: "GHSA-c3wx-c55w-pxjq",
          title: "Logging configuration permits unsafe callable resolution",
          severity: "high",
          cvss: "7.8",
          role: "Analyst",
        },
        {
          cve: "CVE-2026-106442",
          ghsa: "GHSA-rqx7-p7vv-w7hr",
          title: "instantiate target blacklist bypasses permit code execution",
          severity: "high",
          cvss: "7.8",
          role: "Analyst",
        },
      ],
    },
    {
      project: "kin-openapi",
      ecosystem: "Go",
      usage: "3.3k GitHub stars",
      items: [
        {
          cve: "CVE-2026-100354",
          ghsa: "GHSA-g8cf-rcjf-c8cf",
          title: "Uncontrolled recursion on circular allOf/anyOf/oneOf schemas crashes the process",
          severity: "high",
          cvss: "7.5",
          role: "Reporter",
        },
        {
          cve: "CVE-2026-100352",
          ghsa: "GHSA-rj39-cv6w-8wv7",
          title: "YAML NaN/Inf values bypass built-in guards and panic via the OAS 3.1 validation path",
          severity: "high",
          cvss: "7.5",
          role: "Reporter",
        },
        {
          cve: "CVE-2026-100353",
          ghsa: "GHSA-vrcc-3ch7-hppw",
          title: "Incomplete fix: three unpatched nil-items panic paths in openapi3filter",
          severity: "high",
          cvss: "7.5",
          role: "Analyst",
        },
      ],
    },
    {
      project: "YesWiki",
      ecosystem: "PHP",
      items: [
        {
          cve: "CVE-2026-52767",
          ghsa: "GHSA-mv28-wj57-f57g",
          title: "Unauthenticated ActivityPub signature-verification bypass via openssl_verify() returning -1",
          severity: "high",
          cvss: "8.2",
          role: "Analyst",
        },
        {
          cve: "CVE-2026-52762",
          ghsa: "GHSA-65p8-9433-jpcp",
          title: "Admin server-side template injection to remote code execution via Bazar semantic templates",
          severity: "high",
          role: "Analyst",
        },
      ],
    },
  ] as AdvisoryGroup[],

  projects: [
    {
      title: "DVMQTT",
      description:
        "A deliberately vulnerable MQTT lab: common insecure broker and client code alongside working exploits, for practising IoT protocol attacks.",
      tags: ["Python", "MQTT", "IoT"],
      repo: "https://github.com/eros938/DVMQTT",
    },
    {
      title: "secureHTTPs",
      description: "A web scanning and analysis tool for checking a site's HTTPS and security configuration.",
      tags: ["Python", "Web security"],
      repo: "https://github.com/eros938/secureHTTPs",
    },
    {
      title: "Digital Twins of Vehicles",
      description:
        "Published research: threat modelling and attacks on digital twins of connected vehicles, in the journal Smart Cities (MDPI).",
      tags: ["Research", "Threat modelling", "Automotive"],
    },
    {
      title: "OTP Vulnerable Site",
      description: "A deliberately vulnerable one-time-password flow for practising authentication bypass techniques.",
      tags: ["HTML", "Auth"],
      repo: "https://github.com/eros938/OTP-Vulnerable-Site",
    },
  ] as Project[],

  experience: [
    {
      role: "Penetration Tester & Security Engineer",
      company: "Shellvoide",
      period: "Present",
      summary: "Offensive security engagements across web applications, APIs, internal networks and AWS cloud environments.",
    },
    {
      role: "Open-source vulnerability researcher",
      company: "Independent",
      period: "2026 — Present",
      summary:
        "10 CVEs published through coordinated disclosure across the npm, PyPI, Go and PHP ecosystems, working with maintainers to verify fixes.",
    },
    {
      role: "B.S. Cyber Security",
      company: "Air University, Islamabad",
      period: "Expected 2027",
      summary: "Undergraduate degree in cyber security.",
    },
  ],

  skills: {
    Focus: ["Web app pentesting", "API security", "Network pentesting", "Cloud security (AWS)", "Red teaming", "OSINT"],
    Tools: ["Burp Suite Pro", "Metasploit", "Nmap", "Nuclei", "BloodHound", "Impacket", "SQLMap", "Wireshark"],
    "Certifications": ["C|PENT (EC-Council)", "CRTA (CyberWarFare Labs)", "CAP (The SecOps Group)"],
    Recognition: ["Black Hat MEA finalist", "Hack The Box top 6 in Pakistan", "Air Range solo champion"],
  } as Record<string, string[]>,

  contact: {
    email: "khizarbaacha@gmail.com",
    links: [
      { label: "GitHub", href: "https://github.com/eros938" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/khizar-ali-shah-410214233/" },
      { label: "Telegram", href: "https://t.me/eros938" },
      { label: "Advisory credits", href: "https://github.com/advisories?query=credit%3Aeros938" },
    ],
  },
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
};

export type Advisory = {
  cve: string;
  ghsa: string;
  title: string;
  severity: "critical" | "high" | "medium" | "low";
  cvss?: string;
  role: "Reporter" | "Analyst";
};

export type AdvisoryGroup = {
  project: string;
  ecosystem: string;
  usage?: string;
  items: Advisory[];
};
