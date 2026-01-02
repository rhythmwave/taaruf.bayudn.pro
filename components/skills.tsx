import { SectionHeader } from "./section-header";
import { skillCategories } from "@/data/portfolio";

function getCategoryIntro(category: string): string | undefined {
  switch (category) {
    case "Backend":
      return "Production experience designing and implementing APIs, microservices, and asynchronous processing in Go, Python, TypeScript/Node.js, and Rust.";
    case "Frontend":
      return "Modern web frontends with React and Vue, focused on developer experience, performance, and clear UI for complex systems.";
    case "Cloud & DevOps":
      return "Hands-on with Kubernetes and CI/CD pipelines across Azure, AWS, GCP, and Tencent, automating deployments and improving reliability.";
    case "Data & Messaging":
      return "Relational and NoSQL databases plus event-driven messaging, tuned for throughput, correctness, and observability.";
    case "AI / ML & Advanced Tech":
      return "Integrating RAG, computer vision, and LLM tooling into products, from experimentation to production services.";
    case "Observability & Tools":
      return "End-to-end observability stacks and tooling that give teams deep visibility into logs, metrics, and traces.";
    default:
      return undefined;
  }
}

export function SkillsSection() {
  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Skills"
        title="Skills & technologies"
        description="A cross-functional toolset spanning backend systems, DevOps, AI/ML, and modern web development."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {skillCategories.map((category) => (
          <section key={category.category} className="card p-4" aria-label={category.category}>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
              {category.category}
            </h3>
            {getCategoryIntro(category.category) && (
              <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                {getCategoryIntro(category.category)}
              </p>
            )}
            <ul className="mt-3 flex flex-wrap gap-1.5 text-xs text-slate-700 dark:text-slate-200">
              {category.items.map((item) => (
                <li
                  key={item.name}
                  className="rounded-full bg-slate-50 px-3 py-1 text-xs font-medium dark:bg-slate-900/60"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
