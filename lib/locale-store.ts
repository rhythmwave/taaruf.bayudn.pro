import { create, type StateCreator } from "zustand";

export type Locale = "en" | "id";

const STORAGE_KEY = "taaruf-locale";

export interface LocaleState {
  locale: Locale;
  hydrated: boolean;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  hydrate: () => void;
}

const creator: StateCreator<LocaleState> = (set, get) => ({
  locale: "en",
  hydrated: false,
  setLocale: (locale: Locale) => {
    set({ locale });
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, locale);
    }
  },
  toggleLocale: () => {
    const next: Locale = get().locale === "en" ? "id" : "en";
    get().setLocale(next);
  },
  hydrate: () => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const locale: Locale = stored === "id" ? "id" : "en";
    set({ locale, hydrated: true });
  },
});

export const useLocaleStore = create<LocaleState>()(creator);
