import { SectionHeader } from "./section-header";
import { education } from "@/data/portfolio";

export function EducationSection() {
  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Education"
        title="Education"
        description="Formal education that built strong foundations in information systems and software engineering."
      />
      <div className="card p-4 text-sm text-slate-700 dark:text-slate-200">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              {education.institution}
            </p>
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">{education.degree}</p>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">{education.period}</p>
        </div>
        <ul className="mt-3 space-y-1.5 text-xs">
          {education.highlights.map((line) => (
            <li key={line} className="flex gap-2">
              <span className="mt-1 h-1 w-1 flex-none rounded-full bg-primary" aria-hidden="true" />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
