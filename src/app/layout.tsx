import type { Metadata, Viewport } from "next";
import { Inter as FontSans } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { TailwindIndicator } from "@/components/dev/tailwind-indicator";
import Providers from "@/components/providers";
import { GeistSans } from "geist/font/sans";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/sonner";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} - Transform Your Project Workflow`,
    template: `%s | ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "Project Sphere",
    "Open Source",
    "Components",
    "Design System",
    "Tech Stack",
    "OpenAI",
  ],
  authors: [
    {
      name: "Sarang Kumar",
      url: "https://github.com/sarangKumar",
    },
  ],
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-dvh bg-background antialiased selection:bg-primary/70",
          GeistSans.className
        )}
      >
        <Providers>{children}</Providers>
        <TailwindIndicator />
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
