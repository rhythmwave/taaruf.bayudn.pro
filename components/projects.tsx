"use client";

import { useMemo, useState } from "react";
import { SectionHeader } from "./section-header";
import { projects } from "@/data/portfolio";

const FILTERS = ["All", "Backend", "Web", "AI / ML", "DevOps"] as const;

type Filter = (typeof FILTERS)[number];

function matchesFilter(filter: Filter, tags: string[]): boolean {
  if (filter === "All") return true;
  const lowerTags = tags.map((t) => t.toLowerCase());
  switch (filter) {
    case "Backend":
      return ["go", "python", "microservices", "redis", "php", "node.js"].some((k) =>
        lowerTags.includes(k),
      );
    case "Web":
      return ["react", "vue", "web"].some((k) => lowerTags.includes(k));
    case "AI / ML":
      return ["rag", "yolo", "ai/ml", "ml"].some((k) => lowerTags.includes(k));
    case "DevOps":
      return ["kubernetes", "docker", "ci/cd"].some((k) => lowerTags.includes(k));
  }
}

export function ProjectsSection() {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered = useMemo(
    () => projects.filter((p) => matchesFilter(filter, p.tags)),
    [filter],
  );

  const featured = projects.find((p) => p.highlight);

  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Projects"
        title="Selected projects"
        description="Examples of document processing, observability, and cloud-native systems work."
      />
      {featured && (
        <section className="card grid gap-5 p-5 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]" aria-label="Featured project">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Featured</p>
            <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">{featured.title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">{featured.description}</p>
            <div className="mt-2 flex flex-wrap gap-1.5 text-[10px]">
              {featured.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-secondary/10 px-2 py-0.5 font-medium text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center rounded-xl bg-gradient-to-br from-secondary/15 via-primary/10 to-accent/10 text-xs text-slate-800 dark:text-slate-100">
            <p className="max-w-xs p-4 text-center">
              End-to-end pipeline for ingesting, parsing, and searching large document collections with strong
              observability and performance guarantees.
            </p>
          </div>
        </section>
      )}
      <div className="flex flex-wrap items-center gap-2 text-xs">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`rounded-full border px-3 py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-light dark:focus-visible:ring-offset-dark ${
              filter === f
                ? "border-primary bg-primary text-slate-900"
                : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            }`}
            aria-pressed={filter === f}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((project) => (
          <article key={project.title} className="card flex flex-col p-4" aria-label={project.title}>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">{project.title}</h3>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">{project.description}</p>
            <div className="mt-3 flex flex-wrap gap-1.5 text-[10px]">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-50 px-2 py-0.5 font-medium text-slate-600 dark:bg-slate-900/60 dark:text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
            {(project.demoUrl || project.sourceUrl) && (
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline"
                  >
                    Live demo
                  </a>
                )}
                {project.sourceUrl && (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline"
                  >
                    GitHub
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
