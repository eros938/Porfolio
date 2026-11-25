import { site } from "@/content/site";

const nav = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
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
      <div>{children}</div>
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

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-5 sm:px-8">
      <header className="sticky top-0 z-10 -mx-5 flex items-center justify-between gap-4 bg-paper/85 px-5 py-4 backdrop-blur sm:-mx-8 sm:px-8">
        <a href="#top" className="min-w-0 truncate font-medium">
          {site.name}
        </a>
        <nav className="flex shrink-0 gap-3 text-sm text-muted sm:gap-6">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="transition-colors hover:text-ink">
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
              href="#work"
              className="rounded-full bg-ink px-5 py-2.5 text-sm text-paper transition-colors hover:bg-accent"
            >
              See my work
            </a>
            <a
              href={`mailto:${site.contact.email}`}
              className="text-sm underline decoration-line underline-offset-4 hover:text-accent hover:decoration-accent"
            >
              {site.contact.email}
            </a>
            {site.available && (
              <span className="flex items-center gap-2 text-sm text-muted">
                <span className="size-2 rounded-full bg-accent" />
                Open to new work
              </span>
            )}
          </div>
        </section>

        <Section id="about" title="About">
          <div className="max-w-2xl space-y-5 text-lg leading-relaxed">
            {site.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Section>

        <Section id="work" title="Selected work">
          <ul className="grid gap-4 sm:grid-cols-2">
            {site.projects.map((p) => (
              <li
                key={p.title}
                className="flex flex-col rounded-2xl border border-line bg-card p-6 transition-colors hover:border-muted"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-2xl">{p.title}</h3>
                  {p.year && <span className="font-mono text-xs text-muted">{p.year}</span>}
                </div>
                <p className="mt-3 flex-1 leading-relaxed text-muted">{p.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li key={t} className="rounded-full border border-line px-2.5 py-0.5 text-xs text-muted">
                      {t}
                    </li>
                  ))}
                </ul>
                {(p.href || p.repo) && (
                  <div className="mt-5 flex gap-5">
                    {p.href && <ArrowLink href={p.href}>Live</ArrowLink>}
                    {p.repo && <ArrowLink href={p.repo}>Code</ArrowLink>}
                  </div>
                )}
              </li>
            ))}
          </ul>
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

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
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
            Have a project in mind, or just want to say hello?
          </p>
          <a
            href={`mailto:${site.contact.email}`}
            className="mt-8 inline-block text-xl underline decoration-accent decoration-2 underline-offset-8 transition-colors hover:text-accent"
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
        <span>{site.name}</span>
        <a href="#top" className="hover:text-ink">
          Back to top ↑
        </a>
      </footer>
    </div>
  );
}
