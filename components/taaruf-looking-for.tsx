"use client";

import { SectionHeader } from "./section-header";
import { useLocaleStore } from "@/lib/locale-store";
import { t } from "@/lib/i18n";

export function TaarufLookingForSection() {
  const locale = useLocaleStore((s) => s.locale);

  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow={t(locale, "looking.eyebrow")}
        title={t(locale, "looking.title")}
      />
      <div className="grid gap-4 md:grid-cols-2">
        <div className="card p-4 text-sm text-slate-700 dark:text-slate-200">
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary" aria-hidden="true" />
              <span>{t(locale, "looking.item1")}</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary" aria-hidden="true" />
              <span>{t(locale, "looking.item2")}</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary" aria-hidden="true" />
              <span>{t(locale, "looking.item3")}</span>
            </li>
          </ul>
        </div>
        <div className="card p-4 text-sm text-slate-700 dark:text-slate-200">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            Deal-breaker
          </p>
          <p className="mt-2 text-sm">{t(locale, "looking.dealbreaker")}</p>
        </div>
      </div>
    </div>
  );
}
