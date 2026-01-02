import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { ReactNode } from "react";
import { LocaleProvider } from "@/components/locale-provider";

const headingFont = localFont({
  src: [
    {
      path: "../fonts/SpaceGrotesk-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = localFont({
  src: [
    {
      path: "../fonts/Inter-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-body",
  display: "swap",
});

const codeFont = localFont({
  src: [
    {
      path: "../fonts/JetBrainsMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ta'aruf | Bayu Dian Nugroho",
  description:
    "A simple bilingual (EN/ID) ta'aruf profile page for respectful introductions.",
  metadataBase: new URL("https://taaruf.bayudn.pro"),
  openGraph: {
    title: "Ta'aruf | Bayu Dian Nugroho",
    description:
      "A simple bilingual (EN/ID) ta'aruf profile page for respectful introductions.",
    url: "https://taaruf.bayudn.pro",
    siteName: "taaruf.bayudn.pro",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ta'aruf profile",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${headingFont.variable} ${bodyFont.variable} ${codeFont.variable}`}>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
