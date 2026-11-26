import type { CSSProperties, ReactNode } from "react";
import { site } from "@/content/site";
import { CountUp, RevealObserver } from "@/components/motion";

const nav = [
  { id: "about", label: "About" },
  { id: "cves", label: "CVEs" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

/* ---------- small building blocks ---------- */

const stagger = (i: number) => ({ "--i": i }) as CSSProperties;

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

function ArrowUp() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function TextLink({ href, children }: { href: string; children: ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="group inline-flex items-center gap-1 text-sm text-soft transition-colors duration-150 hover:text-ink"
    >
      {children}
      <ArrowUpRight className="text-muted transition-[transform,color] duration-150 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
    </a>
  );
}

/** The signature: a 10-cell CVSS meter, used only next to CVE scores. */
function CvssMeter({ score, size = "sm" }: { score: number; size?: "sm" | "lg" }) {
  const on = Math.round(score);
  const cell = size === "lg" ? "h-3 w-2" : "h-2.5 w-1";
  return (
    <span className="inline-flex items-center gap-0.5" role="img" aria-label={`CVSS ${score} out of 10`}>
      {Array.from({ length: 10 }, (_, i) => (
        <span
          key={i}
          data-on={i < on ? "" : undefined}
          style={{ "--c": i } as CSSProperties}
          className={`meter-cell ${cell} rounded-[1px] ${i < on ? "bg-accent" : "bg-raised"}`}
        />
      ))}
    </span>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section
      id={id}
      className="scroll-mt-20 border-t border-line py-16 md:grid md:grid-cols-[10rem_1fr] md:gap-12 md:py-24"
    >
      <h2 data-reveal className="mb-8 text-sm text-muted md:mb-0 md:pt-1">
        {title}
      </h2>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

/* ---------- hero moment: an advisory record ---------- */

function AdvisoryRecord() {
  const f = site.featured;
  const rows = [
    ["Package", `${f.pkg} (${f.ecosystem})`],
    ["Affected", f.affected],
    ["Patched", f.patched],
    ["Credit", f.credit],
  ];
  return (
    <a
      href={`https://github.com/advisories/${f.ghsa}`}
      target="_blank"
      rel="noreferrer"
      style={stagger(4)}
      className="enter group block rounded-2xl border border-line bg-card p-6 shadow-[0_24px_64px_rgb(0_0_0/0.35)] transition-colors duration-150 hover:border-line-strong"
    >
      <div className="flex items-center justify-between gap-4 font-mono text-xs text-muted">
        <span>{f.ghsa}</span>
        <span>{f.published}</span>
      </div>

      <div className="mt-6 flex items-end justify-between gap-4">
        <div>
          <p className="font-mono text-sm text-soft">{f.cve}</p>
          <h3 className="mt-2 text-xl font-medium leading-snug">{f.title}</h3>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <span className="font-mono text-3xl tabular-nums text-accent">{f.cvss.toFixed(1)}</span>
        <div>
          <CvssMeter score={f.cvss} size="lg" />
          <p className="mt-1 font-mono text-xs text-muted">CVSS · High</p>
        </div>
      </div>

      <dl className="mt-6 grid grid-cols-[5.5rem_1fr] gap-y-2 border-t border-line pt-4 text-sm">
        {rows.map(([k, v]) => (
          <div key={k} className="contents">
            <dt className="text-muted">{k}</dt>
            <dd className="font-mono text-[13px] text-soft">{v}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-6 overflow-hidden rounded-lg border border-line bg-deep font-mono text-[12px] leading-6">
        <p className="truncate bg-[rgb(229_72_77/0.08)] px-3 text-[#f2a5a7]">
          <span className="mr-2 select-none text-muted">-</span>
          {f.diff.before}
        </p>
        <p className="truncate bg-[rgb(76_195_138/0.08)] px-3 text-[#9fe0bf]">
          <span className="mr-2 select-none text-muted">+</span>
          {f.diff.after}
        </p>
        <p className="border-t border-line px-3 py-1 text-muted">{"// "}{f.diff.note}</p>
      </div>
    </a>
  );
}

/* ---------- page ---------- */

export default function Home() {
  const cveCount = site.advisories.reduce((n, g) => n + g.items.length, 0);
  let row = 0;

  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <RevealObserver />

      <header className="sticky top-0 z-20 -mx-5 flex h-16 items-center justify-between gap-4 border-b border-line bg-bg/80 px-5 backdrop-blur-md sm:-mx-8 sm:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-2 font-medium">
          <span aria-hidden className="font-mono text-accent">{">_"}</span>
          <span className="truncate">{site.name}</span>
        </a>
        <nav className="hidden gap-6 text-sm text-soft md:flex">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="transition-colors duration-150 hover:text-ink">
              {n.label}
            </a>
          ))}
        </nav>
        <details className="group relative md:hidden">
          <summary className="flex size-9 cursor-pointer list-none items-center justify-center rounded-lg border border-line text-soft transition-colors hover:text-ink [&::-webkit-details-marker]:hidden">
            <MenuIcon />
            <span className="sr-only">Menu</span>
          </summary>
          <div className="absolute right-0 top-12 w-48 rounded-xl border border-line bg-card p-2 shadow-[0_16px_40px_rgb(0_0_0/0.4)]">
            {nav.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="block rounded-lg px-3 py-2 text-sm text-soft transition-colors hover:bg-raised hover:text-ink">
                {n.label}
              </a>
            ))}
          </div>
        </details>
      </header>

      <main id="top">
        {/* Hero: text on the left, the advisory record on the right */}
        <section className="grid items-center gap-12 py-16 sm:py-24 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:py-16">
          <div>
            <p style={stagger(0)} className="enter mb-6 font-mono text-xs text-muted">
              {site.role} · {site.location}
            </p>
            <h1
              style={stagger(1)}
              className="enter text-[40px] font-medium leading-[1.06] tracking-[-0.03em] sm:text-6xl lg:text-[64px]"
            >
              {site.tagline}
            </h1>
            <p style={stagger(2)} className="enter mt-6 max-w-xl text-lg leading-8 text-soft">
              {site.intro}
            </p>
            <div style={stagger(3)} className="enter mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href="#cves"
                className="inline-flex h-11 items-center rounded-[10px] bg-ink px-5 text-sm font-medium text-deep shadow-[inset_0_1px_0_rgb(255_255_255/0.6)] transition-[background-color,transform] duration-150 hover:bg-white active:scale-[0.98]"
              >
                See my CVEs
              </a>
              <a href={`mailto:${site.contact.email}`} className="text-sm text-soft underline decoration-line-strong underline-offset-4 transition-colors duration-150 hover:text-ink hover:decoration-accent">
                {site.contact.email}
              </a>
            </div>
          </div>

          <AdvisoryRecord />
        </section>

        {/* Stats */}
        <dl className="grid gap-8 border-t border-line py-12 sm:grid-cols-3">
          {site.stats.map((s, i) => (
            <div key={s.label} data-reveal style={stagger(i)}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-4xl font-medium tabular-nums tracking-[-0.02em]">
                <CountUp to={s.to} prefix={s.prefix} suffix={s.suffix} />
              </dd>
              <dd className="mt-2 text-sm text-muted">{s.label}</dd>
            </div>
          ))}
        </dl>

        <Section id="about" title="About">
          <div className="max-w-2xl space-y-5 text-lg leading-8 text-soft">
            {site.about.map((p, i) => (
              <p key={i} data-reveal style={stagger(i)}>
                {p}
              </p>
            ))}
          </div>
        </Section>

        <Section id="cves" title="Security advisories">
          <p data-reveal className="mb-12 max-w-2xl leading-7 text-soft">
            {cveCount} published CVEs, found through coordinated disclosure with each project&apos;s maintainers.
            Every row links to its GitHub advisory.
          </p>
          <div className="space-y-12">
            {site.advisories.map((g) => (
              <div key={g.project}>
                <div data-reveal className="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-xl font-medium">{g.project}</h3>
                  <span className="font-mono text-xs text-muted">
                    {g.ecosystem}
                    {g.usage && ` · ${g.usage}`}
                  </span>
                </div>
                <ul className="border-t border-line">
                  {g.items.map((a) => {
                    const i = row++ % 3;
                    return (
                      <li key={a.cve} data-reveal style={stagger(i)} className="border-b border-line">
                        <a
                          href={`https://github.com/advisories/${a.ghsa}`}
                          target="_blank"
                          rel="noreferrer"
                          className="group -mx-3 grid gap-2 rounded-lg px-3 py-4 transition-colors duration-150 hover:bg-card sm:grid-cols-[10rem_1fr_9rem_4.5rem] sm:items-center sm:gap-6"
                        >
                          <span className="font-mono text-sm text-ink">{a.cve}</span>
                          <span className="leading-6 text-soft transition-colors duration-150 group-hover:text-ink">{a.title}</span>
                          <span className="flex items-center gap-3 font-mono text-xs text-muted">
                            {a.cvss ? (
                              <>
                                <CvssMeter score={Number(a.cvss)} />
                                <span className="tabular-nums text-soft">{a.cvss}</span>
                              </>
                            ) : (
                              <span className="capitalize">{a.severity}</span>
                            )}
                          </span>
                          <span className="flex items-center justify-between gap-2 font-mono text-xs text-muted sm:justify-end">
                            {a.role}
                            <ArrowUpRight className="hidden text-muted opacity-0 transition-[opacity,transform] duration-150 group-hover:translate-x-0.5 group-hover:opacity-100 sm:block" />
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
          <div data-reveal className="mt-10">
            <TextLink href={site.contact.links.find((l) => l.label === "Advisory credits")!.href}>
              All advisory credits on GitHub
            </TextLink>
          </div>
        </Section>

        <Section id="projects" title="Open-source projects">
          <ul className="grid gap-4 sm:grid-cols-2">
            {site.projects.map((p, i) => (
              <li
                key={p.title}
                data-reveal
                style={stagger(i % 2)}
                className="flex flex-col rounded-2xl border border-line bg-card p-6 transition-[border-color,background-color] duration-150 hover:border-line-strong hover:bg-raised/60"
              >
                <h3 className="text-lg font-medium">{p.title}</h3>
                <p className="mt-3 flex-1 leading-7 text-soft">{p.description}</p>
                <p className="mt-5 font-mono text-xs text-muted">{p.tags.join(" · ")}</p>
                {p.links && p.links.length > 0 && (
                  <div className="mt-4 flex gap-5">
                    {p.links.map((l) => (
                      <TextLink key={l.href} href={l.href}>
                        {l.label}
                      </TextLink>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </Section>

        <Section id="research" title="Research">
          <article data-reveal className="max-w-2xl rounded-2xl border border-line bg-card p-6 sm:p-8">
            <p className="font-mono text-xs text-muted">{site.publication.venue}</p>
            <h3 className="mt-4 text-2xl font-medium leading-snug tracking-[-0.01em]">{site.publication.title}</h3>
            <p className="mt-4 leading-7 text-soft">{site.publication.summary}</p>
            <div className="mt-6">
              <TextLink href={site.publication.href}>Read the paper</TextLink>
            </div>
          </article>
        </Section>

        <Section id="experience" title="Experience">
          <ol className="space-y-8">
            {site.experience.map((e, i) => (
              <li
                key={e.role + e.company}
                data-reveal
                style={stagger(i % 3)}
                className="sm:grid sm:grid-cols-[8rem_1fr] sm:gap-6"
              >
                <p className="mb-1 font-mono text-xs text-muted sm:mb-0 sm:pt-1">{e.period}</p>
                <div>
                  <h3 className="font-medium">
                    {e.role} <span className="font-normal text-muted">· {e.company}</span>
                  </h3>
                  <p className="mt-2 max-w-xl leading-7 text-soft">{e.summary}</p>
                </div>
              </li>
            ))}
          </ol>

          <div data-reveal className="mt-16">
            <h3 className="mb-4 text-sm font-medium">Achievements</h3>
            <ul className="grid gap-x-8 gap-y-2 text-soft sm:grid-cols-2">
              {site.achievements.map((a) => (
                <li key={a} className="flex gap-3 leading-7">
                  <span aria-hidden className="mt-3 size-1 shrink-0 rounded-full bg-muted" />
                  {a}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16 grid gap-10 sm:grid-cols-2">
            {Object.entries(site.skills).map(([group, items], i) => (
              <div key={group} data-reveal style={stagger(i % 2)}>
                <h3 className="mb-3 text-sm font-medium">{group}</h3>
                <ul className="space-y-1 leading-7 text-soft">
                  {items.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <p data-reveal className="max-w-xl text-3xl font-medium leading-tight tracking-[-0.02em] sm:text-4xl">
            Need a security assessment, or want to talk about a disclosure?
          </p>
          <a
            data-reveal
            style={stagger(1)}
            href={`mailto:${site.contact.email}`}
            className="mt-8 inline-block break-all font-mono text-lg text-ink underline decoration-accent decoration-2 underline-offset-8 transition-colors duration-150 hover:text-accent sm:text-xl"
          >
            {site.contact.email}
          </a>
          <ul data-reveal style={stagger(2)} className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {site.contact.links.map((l) => (
              <li key={l.label}>
                <TextLink href={l.href}>{l.label}</TextLink>
              </li>
            ))}
          </ul>
        </Section>
      </main>

      <footer className="flex items-center justify-between border-t border-line py-8 text-sm text-muted">
        <span>
          {site.name} · <span className="font-mono">{site.handle}</span>
        </span>
        <a href="#top" className="inline-flex items-center gap-1 transition-colors duration-150 hover:text-ink">
          Back to top
          <ArrowUp />
        </a>
      </footer>
    </div>
  );
}
