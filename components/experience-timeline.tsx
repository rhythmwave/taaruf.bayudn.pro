"use client";

import { SectionHeader } from "./section-header";
import { experiences } from "@/data/portfolio";
import { motion } from "framer-motion";

export function ExperienceSection() {
  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Experience"
        title="Experience timeline"
        description="A decade of building scalable systems, microservices, and production AI/ML workloads."
      />
      <ol className="relative border-s-l border-slate-200 pl-4 dark:border-slate-700">
        {experiences.map((exp, index) => (
          <motion.li
            key={`${exp.company}-${exp.title}-${exp.startDate}`}
            className="mb-8 ms-2 last:mb-0"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
          >
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-primary shadow dark:border-slate-900" />
            <div className="card p-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                    {exp.company}
                  </p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">{exp.title}</p>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {exp.startDate} – {exp.endDate}
                </p>
              </div>
              <ul className="mt-3 space-y-1.5 text-xs text-slate-700 dark:text-slate-200">
                {exp.description.map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="mt-1 h-1 w-1 flex-none rounded-full bg-primary" aria-hidden="true" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              {exp.tech.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-slate-600 dark:bg-slate-900/60 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
