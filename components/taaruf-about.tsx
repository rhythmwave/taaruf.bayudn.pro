"use client";

import { SectionHeader } from "./section-header";
import { useLocaleStore } from "@/lib/locale-store";
import { t } from "@/lib/i18n";
import { profile } from "@/data/profile";
import { MapPin, Briefcase } from "lucide-react";

export function TaarufAboutSection() {
  const locale = useLocaleStore((s) => s.locale);

  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow={t(locale, "about.eyebrow")}
        title={t(locale, "about.title")}
      />

      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
          {profile.location}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Briefcase className="h-4 w-4 text-secondary" aria-hidden="true" />
          {profile.role}
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="card p-4">
          <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">
            {t(locale, "about.p1")}
          </p>
        </div>
        <div className="card p-4">
          <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">
            {t(locale, "about.p2")}
          </p>
        </div>
      </div>
    </div>
  );
}
