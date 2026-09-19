import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/config/site";
import { BuildModeProvider } from "@/components/BuildModeContext";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sneha-portfolio.example.com"),
  title: site.seo.title,
  description: site.seo.description,
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    type: "website",
    siteName: `${site.name} — AI · Data · Product · Automation`,
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-base-950 text-ink-100 antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:z-[100] focus:top-4 focus:left-4 focus:rounded focus:bg-signal-500 focus:px-4 focus:py-2 focus:text-base-950 focus:text-sm"
        >
          Skip to content
        </a>
        <BuildModeProvider>{children}</BuildModeProvider>
      </body>
    </html>
  );
}
