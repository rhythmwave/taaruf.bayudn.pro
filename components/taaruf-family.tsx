"use client";

import { SectionHeader } from "./section-header";
import { useLocaleStore } from "@/lib/locale-store";
import { t } from "@/lib/i18n";
import { Baby, GraduationCap } from "lucide-react";

export function TaarufFamilySection() {
  const locale = useLocaleStore((s) => s.locale);

  const children = [
    {
      icon: Baby,
      title: t(locale, "family.child1.title"),
      age: t(locale, "family.child1.age"),
      desc: t(locale, "family.child1.desc"),
      bgClass: "bg-primary/10",
      iconClass: "text-primary",
    },
    {
      icon: GraduationCap,
      title: t(locale, "family.child2.title"),
      age: t(locale, "family.child2.age"),
      desc: t(locale, "family.child2.desc"),
      bgClass: "bg-secondary/10",
      iconClass: "text-secondary",
    },
  ];

  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow={t(locale, "family.eyebrow")}
        title={t(locale, "family.title")}
      />

      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        {t(locale, "family.intro")}
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {children.map((child) => (
          <div
            key={child.title}
            className="card flex items-start gap-4 p-4"
          >
            <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${child.bgClass}`}>
              <child.icon className={`h-5 w-5 ${child.iconClass}`} aria-hidden="true" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-slate-900 dark:text-slate-50">
                {child.title}
              </h3>
              <p className="mt-0.5 text-xs font-medium text-primary">
                {child.age}
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {child.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="rounded-lg border border-slate-200/70 bg-slate-50 p-4 text-sm leading-relaxed text-slate-600 dark:border-slate-700/70 dark:bg-slate-800/50 dark:text-slate-400">
        {t(locale, "family.closing")}
      </p>
    </div>
  );
}
