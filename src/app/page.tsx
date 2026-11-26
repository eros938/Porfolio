import { site } from "@/content/site";

const nav = [
  { id: "about", label: "About" },
  { id: "cves", label: "CVEs" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-20 border-t border-line py-16 md:grid md:grid-cols-[10rem_1fr] md:gap-10 md:py-20"
    >
      <h2 className="mb-8 text-sm text-muted md:mb-0 md:pt-1">{title}</h2>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="group inline-flex items-center gap-1 text-sm underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
    >
      {children}
      <span aria-hidden className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        ↗
      </span>
    </a>
  );
}

function SeverityBadge({ severity, cvss }: { severity: string; cvss?: string }) {
  const strong = severity === "critical" || severity === "high";
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[11px] capitalize ${
        strong ? "border-accent/40 text-accent" : "border-line text-muted"
      }`}
    >
      {severity}
      {cvss && <span className="opacity-70">{cvss}</span>}
    </span>
  );
}

export default function Home() {
  const cveCount = site.advisories.reduce((n, g) => n + g.items.length, 0);

  return (
    <div className="mx-auto max-w-4xl px-5 sm:px-8">
      <header className="sticky top-0 z-10 -mx-5 flex items-center justify-between gap-4 bg-paper/85 px-5 py-4 backdrop-blur sm:-mx-8 sm:px-8">
        <a href="#top" className="min-w-0 truncate font-medium">
          {site.name}
        </a>
        <nav className="flex shrink-0 gap-3 text-sm text-muted sm:gap-6">
          {nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`transition-colors hover:text-ink ${n.id === "experience" || n.id === "research" ? "hidden sm:inline" : ""}`}
            >
              {n.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="pb-20 pt-16 sm:pt-28">
          <p className="mb-6 text-sm text-muted">
            {site.role} · {site.location}
          </p>
          <h1 className="max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight sm:text-7xl">
            {site.tagline}
          </h1>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href="#cves"
              className="rounded-full bg-ink px-5 py-2.5 text-sm text-paper transition-colors hover:bg-accent"
            >
              See my CVEs
            </a>
            <a
              href={`mailto:${site.contact.email}`}
              className="text-sm underline decoration-line underline-offset-4 hover:text-accent hover:decoration-accent"
            >
              {site.contact.email}
            </a>
          </div>

          <dl className="mt-16 grid gap-8 border-t border-line pt-8 sm:grid-cols-3">
            {site.stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-serif text-4xl">{s.value}</dd>
                <dd className="mt-1 text-sm text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        <Section id="about" title="About">
          <div className="max-w-2xl space-y-5 text-lg leading-relaxed">
            {site.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Section>

        <Section id="cves" title="Security advisories">
          <p className="mb-10 max-w-2xl leading-relaxed text-muted">
            {cveCount} published CVEs, found through coordinated disclosure with each project&apos;s
            maintainers. Every entry links to its GitHub advisory.
          </p>
          <div className="space-y-12">
            {site.advisories.map((g) => (
              <div key={g.project}>
                <div className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-serif text-2xl">{g.project}</h3>
                  <span className="font-mono text-xs text-muted">
                    {g.ecosystem}
                    {g.usage && ` · ${g.usage}`}
                  </span>
                </div>
                <ul className="divide-y divide-line border-y border-line">
                  {g.items.map((a) => (
                    <li key={a.cve}>
                      <a
                        href={`https://github.com/advisories/${a.ghsa}`}
                        target="_blank"
                        rel="noreferrer"
                        className="group grid gap-2 py-4 transition-colors sm:grid-cols-[9.5rem_1fr_auto] sm:items-baseline sm:gap-4"
                      >
                        <span className="font-mono text-sm group-hover:text-accent">{a.cve}</span>
                        <span className="leading-snug text-muted group-hover:text-ink">{a.title}</span>
                        <span className="flex items-center gap-2 sm:justify-end">
                          <SeverityBadge severity={a.severity} cvss={a.cvss} />
                          <span className="text-xs text-muted">{a.role}</span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <ArrowLink href="https://github.com/advisories?query=credit%3Aeros938">
              All advisory credits on GitHub
            </ArrowLink>
          </div>
        </Section>

        <Section id="projects" title="Open-source projects">
          <ul className="grid gap-4 sm:grid-cols-2">
            {site.projects.map((p) => (
              <li
                key={p.title}
                className="flex flex-col rounded-2xl border border-line bg-card p-6 transition-colors hover:border-muted"
              >
                <h3 className="font-serif text-2xl">{p.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted">{p.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li key={t} className="rounded-full border border-line px-2.5 py-0.5 text-xs text-muted">
                      {t}
                    </li>
                  ))}
                </ul>
                {p.links && p.links.length > 0 && (
                  <div className="mt-5 flex gap-5">
                    {p.links.map((l) => (
                      <ArrowLink key={l.href} href={l.href}>
                        {l.label}
                      </ArrowLink>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </Section>

        <Section id="research" title="Research">
          <article className="max-w-2xl">
            <p className="font-mono text-xs text-muted">{site.publication.venue}</p>
            <h3 className="mt-3 font-serif text-3xl leading-tight">{site.publication.title}</h3>
            <p className="mt-4 leading-relaxed text-muted">{site.publication.summary}</p>
            <div className="mt-5">
              <ArrowLink href={site.publication.href}>Read the paper</ArrowLink>
            </div>
          </article>
        </Section>

        <Section id="experience" title="Experience">
          <ol className="space-y-10">
            {site.experience.map((e) => (
              <li key={e.role + e.company} className="sm:grid sm:grid-cols-[9rem_1fr] sm:gap-6">
                <p className="mb-1 font-mono text-xs text-muted sm:mb-0 sm:pt-1.5">{e.period}</p>
                <div>
                  <h3 className="text-lg font-medium">
                    {e.role} <span className="text-muted">· {e.company}</span>
                  </h3>
                  <p className="mt-2 max-w-xl leading-relaxed text-muted">{e.summary}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-16">
            <h3 className="mb-4 text-sm font-medium">Achievements</h3>
            <ul className="grid gap-x-8 gap-y-2 text-muted sm:grid-cols-2">
              {site.achievements.map((a) => (
                <li key={a} className="flex gap-3">
                  <span aria-hidden className="mt-2.5 size-1 shrink-0 rounded-full bg-accent" />
                  {a}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16 grid gap-10 sm:grid-cols-2">
            {Object.entries(site.skills).map(([group, items]) => (
              <div key={group}>
                <h3 className="mb-3 text-sm font-medium">{group}</h3>
                <ul className="space-y-1.5 text-muted">
                  {items.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <p className="max-w-xl font-serif text-4xl leading-tight sm:text-5xl">
            Need a security assessment, or want to talk about a disclosure?
          </p>
          <a
            href={`mailto:${site.contact.email}`}
            className="mt-8 inline-block break-all text-xl underline decoration-accent decoration-2 underline-offset-8 transition-colors hover:text-accent"
          >
            {site.contact.email}
          </a>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {site.contact.links.map((l) => (
              <li key={l.label}>
                <ArrowLink href={l.href}>{l.label}</ArrowLink>
              </li>
            ))}
          </ul>
        </Section>
      </main>

      <footer className="flex justify-between border-t border-line py-8 text-sm text-muted">
        <span>
          {site.name} · {site.handle}
        </span>
        <a href="#top" className="hover:text-ink">
          Back to top ↑
        </a>
      </footer>
    </div>
  );
}
