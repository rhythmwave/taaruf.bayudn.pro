"use client";

import { SectionHeader } from "./section-header";
import { useLocaleStore } from "@/lib/locale-store";
import { t } from "@/lib/i18n";

const ITEMS = [
  { titleKey: "values.item1.title", descKey: "values.item1.desc", color: "from-primary/20 to-primary/5" },
  { titleKey: "values.item2.title", descKey: "values.item2.desc", color: "from-secondary/20 to-secondary/5" },
  { titleKey: "values.item3.title", descKey: "values.item3.desc", color: "from-accent/20 to-accent/5" },
] as const;

export function TaarufValuesSection() {
  const locale = useLocaleStore((s) => s.locale);

  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow={t(locale, "values.eyebrow")}
        title={t(locale, "values.title")}
      />
      <div className="grid gap-4 md:grid-cols-3">
        {ITEMS.map((item) => (
          <div
            key={item.titleKey}
            className="card relative overflow-hidden p-4"
          >
            <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${item.color} blur-2xl`} />
            <div className="relative">
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                {t(locale, item.titleKey)}
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {t(locale, item.descKey)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
