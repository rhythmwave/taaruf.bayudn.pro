"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Moon, Sun, Menu, X } from "lucide-react";
import { useLocaleStore, type LocaleState } from "@/lib/locale-store";
import { t, type TranslationKey } from "@/lib/i18n";

const SECTIONS: Array<{ id: string; labelKey: TranslationKey }> = [
  { id: "home", labelKey: "nav.home" },
  { id: "about", labelKey: "nav.about" },
  { id: "family", labelKey: "nav.family" },
  { id: "values", labelKey: "nav.values" },
  { id: "lookingFor", labelKey: "nav.lookingFor" },
  { id: "contact", labelKey: "nav.contact" },
];

export function NavigationBar() {
  const [activeId, setActiveId] = useState<string>("home");
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isOnHero, setIsOnHero] = useState(true);
  const locale = useLocaleStore((s: LocaleState) => s.locale);
  const toggleLocale = useLocaleStore((s: LocaleState) => s.toggleLocale);

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const systemPrefersDark = mq.matches;
    const stored = window.localStorage.getItem("cv-portfolio-theme");
    const initialTheme = (stored as "light" | "dark" | null) ?? (systemPrefersDark ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");

    const handleScroll = () => {
      const offset = 96;
      let current = "home";
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - offset <= 0) {
          current = section.id;
        } else {
          break;
        }
      }
      setActiveId(current);
      
      // Navbar is transparent only when at the very top (not scrolled)
      setIsOnHero(window.scrollY < 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark", next === "dark");
      window.localStorage.setItem("cv-portfolio-theme", next);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top: y, behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        isOnHero
          ? "border-transparent bg-transparent"
          : "border-b border-slate-200/70 bg-light/80 backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-900/80"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
      >
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">BDN</span>
        </div>
        <div className="hidden items-center gap-6 text-sm font-medium md:flex">
          {SECTIONS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative inline-flex items-center px-1 py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-light dark:focus-visible:ring-offset-dark ${
                activeId === item.id
                  ? "text-slate-900 dark:text-slate-50"
                  : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
              }`}
              aria-current={activeId === item.id ? "page" : undefined}
            >
              {t(locale, item.labelKey)}
              {activeId === item.id && (
                <span className="absolute inset-x-1 -bottom-1 h-0.5 rounded-full bg-primary" aria-hidden="true" />
              )}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          {/* Social links - always visible */}
          <div className="flex items-center gap-1" aria-label="Social links">
            <a
              href="https://github.com/rhythmwave"
              target="_blank"
              rel="noreferrer"
              className="rounded-full p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
              aria-label="GitHub profile"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/bayu-dian-nugroho"
              target="_blank"
              rel="noreferrer"
              className="rounded-full p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="mailto:kleirose.bayu@gmail.com"
              className="rounded-full p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
              aria-label="Send email"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          {/* Theme toggle - always visible */}
          {mounted && (
            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-full border border-slate-200 bg-white/80 p-1.5 text-slate-700 shadow-sm transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:bg-slate-800"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Moon className="h-4 w-4" aria-hidden="true" />
              )}
            </button>
          )}
          {/* Locale toggle - always visible */}
          {mounted && (
            <button
              type="button"
              onClick={toggleLocale}
              className="rounded-full border border-slate-200 bg-white/80 px-2.5 py-1.5 text-xs font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:bg-slate-800"
              aria-label={t(locale, "nav.language")}
            >
              {locale.toUpperCase()}
            </button>
          )}
          {/* Mobile menu toggle */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 p-1.5 text-slate-700 shadow-sm transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:bg-slate-800 md:hidden"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X className="h-4 w-4" aria-hidden="true" /> : <Menu className="h-4 w-4" aria-hidden="true" />}
          </button>
        </div>
      </nav>
      {/* Mobile dropdown menu */}
      {/* Mobile dropdown menu - navigation only */}
      {mobileOpen && (
        <div
          id="mobile-nav"
          className="border-b border-slate-200/70 bg-light/95 backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-900/95 md:hidden"
        >
          <div className="mx-auto flex max-w-5xl flex-wrap gap-2 px-4 py-3 text-sm">
            {SECTIONS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`rounded-full px-3 py-1.5 text-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  activeId === item.id
                    ? "bg-primary text-slate-900"
                    : "bg-slate-900/5 text-slate-700 hover:bg-slate-900/10 dark:bg-slate-50/10 dark:text-slate-100 dark:hover:bg-slate-50/20"
                }`}
                aria-current={activeId === item.id ? "page" : undefined}
              >
                {t(locale, item.labelKey)}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
