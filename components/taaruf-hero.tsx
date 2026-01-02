"use client";

import { useLocaleStore } from "@/lib/locale-store";
import { t } from "@/lib/i18n";
import { ArrowRight, Mail, Calendar, Users, MapPin, Heart } from "lucide-react";

export function TaarufHeroSection() {
  const locale = useLocaleStore((s) => s.locale);

  const facts = [
    { icon: Calendar, label: t(locale, "hero.fact1.label"), value: t(locale, "hero.fact1.value") },
    { icon: Users, label: t(locale, "hero.fact2.label"), value: t(locale, "hero.fact2.value") },
    { icon: MapPin, label: t(locale, "hero.fact3.label"), value: t(locale, "hero.fact3.value") },
    { icon: Heart, label: t(locale, "hero.fact4.label"), value: t(locale, "hero.fact4.value") },
  ];

  return (
    <div className="relative pb-10 pt-20 sm:pb-14 sm:pt-24 lg:pb-16 lg:pt-28">
      <div className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 overflow-hidden">
        <div className="absolute -left-1/3 -top-1/3 h-[500px] w-[500px] animate-blob rounded-full bg-gradient-to-br from-primary/15 via-primary/5 to-transparent blur-[100px] sm:h-[700px] sm:w-[700px]" />
        <div className="animation-delay-2000 absolute -right-1/3 top-0 h-[400px] w-[400px] animate-blob rounded-full bg-gradient-to-br from-secondary/15 via-secondary/5 to-transparent blur-[100px] sm:h-[600px] sm:w-[600px]" />
        <div className="animation-delay-4000 absolute -bottom-1/4 left-1/4 h-[350px] w-[350px] animate-blob rounded-full bg-gradient-to-br from-accent/10 via-accent/5 to-transparent blur-[100px] sm:h-[500px] sm:w-[500px]" />
      </div>

      <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2 md:gap-8">
        <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm">
            {t(locale, "hero.badge")}
          </span>

          <div className="space-y-3">
            <h1 className="gradient-text text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {t(locale, "hero.title")}
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-300 sm:text-base">
              {t(locale, "hero.subtitle")}
            </p>
          </div>

          <p className="max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
            {t(locale, "hero.lead")}
          </p>

          <p className="max-w-2xl rounded-lg border-l-4 border-primary/50 bg-primary/5 p-3 text-sm italic leading-relaxed text-slate-600 dark:text-slate-400">
            {t(locale, "hero.note")}
          </p>

          <div className="flex w-full flex-col items-center gap-3 md:items-start sm:w-auto sm:flex-row sm:gap-4">
            <a href="#contact" className="btn btn-primary w-full sm:w-auto">
              <Mail className="h-4 w-4" aria-hidden="true" />
              <span>{t(locale, "hero.ctaPrimary")}</span>
            </a>
            <a href="#about" className="btn btn-outline w-full sm:w-auto">
              <span>{t(locale, "hero.ctaSecondary")}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <div className="card overflow-hidden">
            <div className="aspect-[4/5] w-full">
              <img
                src="/profile.png"
                alt={t(locale, "hero.photoAlt")}
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>

          <div className="card p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              {t(locale, "hero.factsTitle")}
            </p>
            <dl className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {facts.map((item) => (
                <div key={item.label} className="flex items-start gap-3 rounded-lg border border-slate-200/70 bg-white/60 p-3 dark:border-slate-700/70 dark:bg-slate-900/30">
                  <item.icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <dt className="text-xs font-medium text-slate-500 dark:text-slate-400">{item.label}</dt>
                    <dd className="mt-1 text-sm font-semibold text-slate-900 dark:text-slate-50">{item.value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
