"use client";

import { ReactNode, useEffect } from "react";
import { useLocaleStore } from "@/lib/locale-store";

export function LocaleProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    useLocaleStore.getState().hydrate();
  }, []);

  return children;
}
