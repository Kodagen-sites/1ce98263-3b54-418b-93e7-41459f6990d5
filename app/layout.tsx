import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EditorBridge from "@/components/__kodagen/EditorBridge";
import { FilmGrain, Vignette } from "@/components/motion";
import { siteConfig } from "@/content/site-config";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.siteUrl),
  title: {
    default: siteConfig.seo.defaultTitle,
    template: `%s — ${siteConfig.company.name}`,
  },
  description: siteConfig.seo.defaultDescription,
  openGraph: {
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    url: siteConfig.seo.siteUrl,
    siteName: siteConfig.company.name,
    locale: siteConfig.seo.locale,
    type: "website",
    images: [{ url: siteConfig.seo.defaultOgImage, width: 1200, height: 675 }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    images: [siteConfig.seo.defaultOgImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang={siteConfig.seo.htmlLang}
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="bg-bg text-ink antialiased">
        <FilmGrain opacity={0.04} />
        <Vignette strength={0.12} innerStop={62} color="#3a3d45" />
        <Header />
        {children}
        <Footer />
        <EditorBridge />
      </body>
    </html>
  );
}
