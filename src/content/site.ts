// All the text on the site lives here. Edit this file to change the portfolio.

export const site = {
  name: "Khizar Ali Shah",
  handle: "eros98",
  role: "Penetration Tester & Security Engineer",
  location: "Islamabad, Pakistan",
  // Used for link previews and the canonical URL. Change it if you deploy to a different address.
  url: "https://porfolio-sepia-ten.vercel.app",
  tagline: "I find the security bugs in open source before attackers do.",

  intro:
    "Penetration tester at Shellvoide. I'm credited on 10 CVEs in axios, follow-redirects, Meta's Hydra, kin-openapi and YesWiki.",

  // Numbers count up from zero when they scroll into view.
  stats: [
    { to: 10, label: "CVEs credited" },
    { to: 290, prefix: "~", suffix: "M", label: "weekly downloads across affected npm packages" },
    { to: 2, prefix: "#", label: "in Pakistan on CTFtime" },
  ],

  // The advisory shown as a record in the hero. The diff is the real upstream fix.
  featured: {
    ghsa: "GHSA-mv28-wj57-f57g",
    cve: "CVE-2026-52767",
    published: "2026-07-09",
    title: "Unauthenticated ActivityPub signature-verification bypass",
    cvss: 8.2,
    pkg: "yeswiki/yeswiki",
    ecosystem: "Composer",
    affected: ">= 4.6.2, < 4.6.6",
    patched: "4.6.6",
    credit: "eros938 · analyst",
    diff: {
      before: "if (!openssl_verify(…)) {",
      after: "if (openssl_verify(…) !== 1) {",
      note: "openssl_verify() returns -1 on error, and !(-1) is false",
    },
  },

  about: [
    "I'm a penetration tester and security engineer at Shellvoide, working across web, API, network and AWS cloud security, with a background in hardware, IoT and embedded systems security. Outside client work I hunt for vulnerabilities in open-source software and report them through coordinated disclosure.",
    "I'm co-credited on 10 published CVEs in projects including axios, follow-redirects, Meta's Hydra, kin-openapi and YesWiki. My findings range from credential leaks in HTTP redirect handling and prototype-pollution gadgets to configuration-driven code execution and denial-of-service bugs in API validation, including an incomplete patch I traced back to three unfixed crash paths.",
    "I care about making security research useful to maintainers: clear reports, working proofs of concept and help verifying fixes. I co-authored a systematic review of threat modelling and attacks on vehicle digital twins (Smart Cities, MDPI), and I compete in CTFs.",
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

  // Open-source projects. `links` are optional; projects without a public repo show no link.
  projects: [
    {
      title: "GDrive 3.0",
      description:
        "Decentralised cloud storage that tackles the weaknesses of centralised platforms like Google Drive by building on a blockchain architecture.",
      tags: ["Blockchain", "Web3", "Cloud storage"],
    },
    {
      title: "Torlizer",
      description:
        "Routes Linux commands and TCP connections through the Tor network so security workflows stay anonymous.",
      tags: ["Tor", "Linux", "Privacy"],
      links: [{ label: "Code", href: "https://github.com/president-xd/toralizer" }],
    },
    {
      title: "Cynses AI",
      description:
        "An agentic PCAP analyser that investigates packet captures, flags suspicious behaviour and speeds up security triage.",
      tags: ["AI agents", "Network forensics", "PCAP"],
      links: [{ label: "Code", href: "https://github.com/eros938/CynsesAi" }],
    },
    {
      title: "SecureHTTPs",
      description:
        "A web security analyser that grades CSP policies, cipher suites, digital signatures and other HTTPS security controls.",
      tags: ["Python", "Web security", "TLS"],
      links: [{ label: "Code", href: "https://github.com/eros938/secureHTTPs" }],
    },
    {
      title: "DVMQTT",
      description:
        "A deliberately vulnerable MQTT lab: insecure broker and client code alongside working exploits, for practising IoT protocol attacks.",
      tags: ["Python", "MQTT", "IoT"],
      links: [{ label: "Code", href: "https://github.com/eros938/DVMQTT" }],
    },
    {
      title: "ShellCode Process Injector",
      description:
        "An educational 64-bit MASM shellcode process injector for studying low-level execution flow and process injection.",
      tags: ["MASM", "Windows internals", "Malware analysis"],
    },
    {
      title: "ESP32 Secure IoT System",
      description:
        "ESP32 firmware with AWS IoT integration, SSL/TLS-secured communication and over-the-air updates.",
      tags: ["ESP-IDF", "FreeRTOS", "AWS IoT"],
    },
    {
      title: "OTP Vulnerable Site",
      description: "A deliberately vulnerable one-time-password flow for practising authentication bypass techniques.",
      tags: ["Web", "Auth"],
      links: [{ label: "Code", href: "https://github.com/eros938/OTP-Vulnerable-Site" }],
    },
  ] as Project[],

  publication: {
    title: "Threat Modeling and Attacks on Digital Twins of Vehicles: A Systematic Literature Review",
    venue: "Smart Cities (MDPI), 2025, 8(5), 142",
    summary:
      "A PRISMA-based review, co-authored with international collaborators, that maps cybersecurity risks and threat-modelling methods for automotive digital twins, highlights gaps in validating attack simulations, and proposes directions aligned with UNECE R155.",
    href: "https://doi.org/10.3390/smartcities8050142",
  },

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
      role: "Mobile & Embedded Systems Security Intern",
      company: "National Center for Cyber Security",
      period: "Internship",
      summary: "Analysed device-level risks, tested attack surfaces and improved hardening for mobile and embedded systems.",
    },
    {
      role: "AppSec Intern",
      company: "National Center for Cyber Security",
      period: "Internship",
      summary: "Application security assessments, threat identification and secure code review on real project workflows.",
    },
    {
      role: "AppSec Intern",
      company: "Trillium Information Security Systems",
      period: "Internship",
      summary: "Vulnerability analysis, secure testing workflows and risk-focused reporting.",
    },
    {
      role: "Hardware Penetration Tester",
      company: "HIRG",
      period: "Previously",
      summary: "Firmware reverse engineering, key fob relay attacks and embedded system penetration testing.",
    },
  ],

  achievements: [
    "Black Hat MEA CTF finalist, Riyadh — 45th worldwide",
    "#2 in Pakistan on CTFtime",
    "Hack The Box Pro Hacker — top 6 in Pakistan",
    "NUST MCS CTF 2026 — 2nd place",
    "PCC CTF 2026 — top 5",
    "NUST MCS CTF 2025 — finalist, top 6",
    "Ignite CTF 2024 qualifiers — top 8",
    "Air Range — solo champion",
  ],

  skills: {
    Focus: ["Web app pentesting", "API security", "Network pentesting", "Cloud security (AWS)", "Red teaming", "OSINT"],
    "Hardware & IoT": ["Firmware reverse engineering", "Embedded & MCU security", "Bluetooth & radio security", "CAN bus", "Secure boot"],
    Tools: ["Burp Suite Pro", "Metasploit", "Nmap", "Nuclei", "BloodHound", "Impacket", "SQLMap", "Wireshark"],
    Languages: ["Python", "C++", "Bash", "PowerShell", "ARM assembly", "MASM"],
    Certifications: ["C|PENT (EC-Council)", "CRTA (CyberWarFare Labs)", "CAP (The SecOps Group)", "TryHackMe Advent of Cyber"],
  } as Record<string, string[]>,

  contact: {
    email: "khizarbazeera@proton.me",
    links: [
      { label: "GitHub", href: "https://github.com/eros938" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/khizar-ali-shah-410214233/" },
      { label: "Advisory credits", href: "https://github.com/advisories?query=credit%3Aeros938" },
    ],
  },
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  links?: { label: string; href: string }[];
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
