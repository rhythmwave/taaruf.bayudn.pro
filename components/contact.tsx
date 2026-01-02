"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { SectionHeader } from "./section-header";
import { profile } from "@/data/profile";
import { useLocaleStore, type LocaleState } from "@/lib/locale-store";
import { t } from "@/lib/i18n";

type FormStatus = "idle" | "submitting" | "submitted" | "error";

const API_URL = process.env.NEXT_PUBLIC_CONTACT_API_URL || "http://localhost:8080";

export function ContactSection() {
  const locale = useLocaleStore((s: LocaleState) => s.locale);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState<string | null>(null);
  const tokenRef = useRef<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Fetch token on mount
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const res = await fetch(`${API_URL}/token`, {
          method: "GET",
          credentials: "omit",
        });
        if (res.ok) {
          const data = await res.json();
          tokenRef.current = data.token;
        }
      } catch {
        // Token fetch failed silently; will show error on submit
      }
    };
    fetchToken();
  }, []);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (!tokenRef.current) {
      setError(t(locale, "contact.errorNoToken"));
      setStatus("error");
      return;
    }

    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    setStatus("submitting");
    setError(null);

    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Contact-Token": tokenRef.current,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      setStatus("submitted");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "An unexpected error occurred");
    }
  };

  const handleRetry = () => {
    setStatus("idle");
    setError(null);
  };

  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow={t(locale, "contact.eyebrow")}
        title={t(locale, "contact.title")}
        description={t(locale, "contact.desc")}
      />
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <form className="card space-y-4 p-4" onSubmit={onSubmit} noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1 text-sm">
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-200" htmlFor="name">
                {t(locale, "contact.name")}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-light dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:focus-visible:ring-offset-dark"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-200" htmlFor="email">
                {t(locale, "contact.email")}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-light dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:focus-visible:ring-offset-dark"
              />
            </div>
          </div>
          <div className="space-y-1 text-sm">
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-200" htmlFor="message">
              {t(locale, "contact.message")}
            </label>
            <textarea
              id="message"
              name="message"
              required
              minLength={10}
              rows={4}
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-light dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:focus-visible:ring-offset-dark"
            />
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            {status === "error" ? (
              <button
                type="button"
                onClick={handleRetry}
                className="btn btn-primary w-full sm:w-auto"
              >
                {t(locale, "contact.tryAgain")}
              </button>
            ) : (
              <button
                type="submit"
                disabled={status === "submitting" || status === "submitted"}
                className="btn btn-primary w-full sm:w-auto disabled:opacity-60"
              >
                {status === "idle" && t(locale, "contact.send")}
                {status === "submitting" && t(locale, "contact.sending")}
                {status === "submitted" && t(locale, "contact.sent")}
              </button>
            )}
          </div>
          {error && (
            <p className="text-[11px] text-red-600 dark:text-red-400">{error}</p>
          )}
          {status === "submitted" && (
            <p className="text-[11px] text-green-600 dark:text-green-400">
              {t(locale, "contact.thanks")}
            </p>
          )}
        </form>
        <aside className="space-y-4 text-sm text-slate-700 dark:text-slate-200">
          <div className="card space-y-2 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              {t(locale, "contact.directLinks")}
            </p>
            <ul className="space-y-1 text-sm">
              <li>
                <a
                  href={profile.social.email}
                  className="text-primary hover:underline"
                  aria-label="Email Bayu Dian Nugroho"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:underline"
                  aria-label="LinkedIn profile of Bayu Dian Nugroho"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:underline"
                  aria-label="GitHub profile of Bayu Dian Nugroho"
                >
                  GitHub (@rhythmwave)
                </a>
              </li>
            </ul>
          </div>
          <div className="card space-y-1 p-4 text-xs">
            <p className="font-semibold text-slate-900 dark:text-slate-50">{t(locale, "contact.based")}</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
