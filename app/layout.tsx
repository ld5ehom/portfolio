/**
 * @see docs/portfolio/liquid-light.md
 * Root layout. Sidebar stays mounted while the page slot changes.
 */
import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { SidebarNav } from "@/components/sidebar-nav";
import { SocialLinks } from "@/components/social-links";
import { basePath } from "@/lib/base-path";
import { chromePane, sheetPane } from "@/lib/glass";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const sans = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Taewook Park",
  description: "Taewook Park portfolio.",
};

/** Root frame. */
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`glass h-full bg-transparent ${display.variable} ${sans.variable}`}>
      <body className="m-0 h-full overflow-hidden font-[family-name:var(--font-sans)] text-[#102033]">
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10 animate-photo-drift bg-cover bg-center motion-reduce:animate-none"
          style={{ backgroundImage: `url('${basePath}/glass/ucla.jpg')` }}
        />
        <div className="box-border grid h-full grid-cols-1 grid-rows-[2.75rem_auto_1fr] gap-4 p-4 md:grid-cols-[16rem_1fr] md:grid-rows-[2.75rem_1fr] md:px-[1.1rem]">
          <header className={`${chromePane} flex items-center justify-end px-[1.2rem] md:col-span-2`}>
            <SocialLinks />
          </header>
          <SidebarNav />
          <main className={sheetPane}>{children}</main>
        </div>
      </body>
    </html>
  );
}
