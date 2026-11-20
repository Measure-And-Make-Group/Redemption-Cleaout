import type { Metadata } from "next";
import { oswald, ptSansNarrow, sourceSans } from "@/lib/fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { SkipLink } from "@/components/layout/SkipLink";
import { MotionGate } from "@/components/motion/MotionGate";
import { ConsentGate } from "@/components/ConsentGate";
import { Analytics } from "@/components/Analytics";
import { ConsentBanner } from "@/components/ConsentBanner";
import { StructuredData } from "@/components/StructuredData";
import { organizationJsonLd, websiteJsonLd } from "@/lib/structuredData";
import { siteUrl } from "@/content/business";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Redemption Cleanout Services | Metro Detroit Cleanouts & Demolition",
    template: "%s | Redemption Cleanout Services",
  },
  description:
    "Estate cleanouts, junk removal, and demolition across Metro Detroit — Macomb, Oakland, St. Clair, Wayne, Monroe, Washtenaw, and Livingston counties. Estimates from photos, final quote on site.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${ptSansNarrow.variable} ${sourceSans.variable}`}
    >
      <head>
        <MotionGate />
        <ConsentGate />
      </head>
      <body>
        <StructuredData data={[organizationJsonLd(), websiteJsonLd()]} />
        <SkipLink />
        {/* Early in the document on purpose. It is position:fixed, so DOM order
            costs nothing visually, but the banner is the mobile LCP element and
            placing it after the whole page pushed it past byte 109,000 of the
            HTML — on a throttled connection that alone was ~2.7s of render
            delay. Here it arrives in the first few KB and paints with FCP.
            Appearing early in the tab order is also the conventional and more
            accessible position for a consent prompt. */}
        <ConsentBanner />
        <Header />
        <main id="main-content" className="pb-[76px] sm:pb-0">
          {children}
        </main>
        <Footer />
        <MobileActionBar />
        <Analytics />
      </body>
    </html>
  );
}
