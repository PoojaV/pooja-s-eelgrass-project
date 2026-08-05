import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pooja — Personal Website" },
      {
        name: "description",
        content:
          "Pooja volunteers with the Community Eelgrass Restoration Initiative in Mahone Bay and builds observability systems. Based in Halifax, Canada.",
      },
      { property: "og:title", content: "Pooja — Personal Website" },
      {
        property: "og:description",
        content:
          "Pooja volunteers with the Community Eelgrass Restoration Initiative in Mahone Bay and builds observability systems. Based in Halifax, Canada.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// Edit these two values to update your contact details across the whole page.
const EMAIL = "pooja@email.com";
const LINKEDIN_URL = "https://linkedin.com/in/yourprofile";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 border-b border-border/60 bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <a
            href="#"
            className="text-lg font-semibold tracking-tight text-foreground"
          >
            Pooja
          </a>
          <nav className="hidden gap-6 text-sm font-medium text-muted-foreground sm:flex">
            <a href="#about" className="transition-colors hover:text-foreground">
              About
            </a>
            <a href="#skills" className="transition-colors hover:text-foreground">
              Skills
            </a>
            <a href="#work" className="transition-colors hover:text-foreground">
              Work
            </a>
            <a href="#contact" className="transition-colors hover:text-foreground">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary">
              Hello, I'm
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Pooja
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground sm:text-2xl">
              I monitor eelgrass with the Community Eelgrass Restoration
              Initiative, build observability systems, and I'm working toward an
              AI-powered way to track eelgrass growth.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
              >
                Get in touch
              </a>
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                See my work
              </a>
            </div>
          </div>
        </section>

        {/* About me */}
        <section id="about" className="border-t border-border px-6 py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-sm font-medium uppercase tracking-wider text-primary">
              About me
            </h2>
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                I'm Pooja, and I recently moved to Halifax, Canada. Right now, I
                volunteer with the{" "}
                <span className="font-medium text-foreground">
                  Community Eelgrass Restoration Initiative
                </span>
                , helping monitor eelgrass beds in Mahone Bay.
              </p>
              <p>
                My background is in observability, OpenShift, Ansible, and
                reporting. What matters most to me is doing work that aligns with
                my values. I love learning new things, exploring new places, and
                trying out activities I've never done before.
              </p>
              <p>
                I'm especially interested in contributing something meaningful
                for the environment. One goal I'm working toward is building an AI
                system that can monitor eelgrass growth over time.
              </p>
            </div>
          </div>
        </section>

        {/* What I do / skills */}
        <section id="skills" className="border-t border-border px-6 py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-sm font-medium uppercase tracking-wider text-primary">
              What I do
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <SkillCard
                title="Observability"
                description="Monitoring, logging, and making systems easier to understand."
              />
              <SkillCard
                title="OpenShift"
                description="Working with container platforms and cloud-native deployments."
              />
              <SkillCard
                title="Ansible"
                description="Automating configuration and repeatable operational tasks."
              />
              <SkillCard
                title="Reporting"
                description="Turning data into clear, useful summaries for teams and stakeholders."
              />
            </div>
          </div>
        </section>

        {/* My work / portfolio */}
        <section id="work" className="border-t border-border px-6 py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-sm font-medium uppercase tracking-wider text-primary">
              My work
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
              A few projects and examples of what I've been working on. I'll keep
              adding to this section.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <ProjectCard
                title="Project One"
                description="Short description of this project. What problem did it solve? What was your role?"
                tags={["Tag 1", "Tag 2"]}
              />
              <ProjectCard
                title="Project Two"
                description="Short description of this project. What problem did it solve? What was your role?"
                tags={["Tag 1", "Tag 2"]}
              />
              <ProjectCard
                title="Project Three"
                description="Short description of this project. What problem did it solve? What was your role?"
                tags={["Tag 1", "Tag 2"]}
              />
              <ProjectCard
                title="Project Four"
                description="Short description of this project. What problem did it solve? What was your role?"
                tags={["Tag 1", "Tag 2"]}
              />
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-border px-6 py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-sm font-medium uppercase tracking-wider text-primary">
              Contact
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
              I'd love to hear from you. Whether it's about eelgrass,
              observability, or just saying hello, feel free to reach out.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
              >
                Email me
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                LinkedIn
              </a>
            </div>
            <div className="mt-10 space-y-3 text-sm text-muted-foreground">
              <p>
                Email:{" "}
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-foreground underline underline-offset-4 transition-colors hover:text-primary"
                >
                  {EMAIL}
                </a>
              </p>
              <p>
                LinkedIn:{" "}
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline underline-offset-4 transition-colors hover:text-primary"
                >
                  {LINKEDIN_URL}
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Links */}
        <section className="border-t border-border px-6 py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-sm font-medium uppercase tracking-wider text-primary">
              Links
            </h2>
            <ul className="space-y-3 text-foreground">
              <li>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="transition-colors hover:text-primary"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-6 py-8">
        <div className="mx-auto max-w-3xl text-sm text-muted-foreground">
          © {new Date().getFullYear()} Pooja. Made with care in Halifax, Canada.
        </div>
      </footer>
    </div>
  );
}

function SkillCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

function ProjectCard({
  title,
  description,
  tags,
}: {
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <article className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-primary/30">
      <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
