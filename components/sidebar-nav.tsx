/**
 * @see docs/portfolio/liquid-light.md
 * Sidebar links. The open route is the selection.
 */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { chromePane } from "@/lib/glass";
import { PROJECTS } from "@/lib/portfolio-content";

const LINKS = [
  { href: "/", label: "About Me" },
  { href: `/projects/${PROJECTS[0].id}`, label: "Projects" },
] as const;

/** About Me and Projects. Active state follows the URL. */
export function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav className={`${chromePane} flex flex-col gap-[0.45rem] p-[0.7rem] max-md:flex-row`} aria-label="Pages">
      {LINKS.map((item) => {
        const on = item.href === "/" ? pathname === "/" : pathname.startsWith("/projects");
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={on ? "page" : undefined}
            className={
              on
                ? "rounded-[0.8rem] bg-white/40 px-[0.9rem] py-[0.85rem] text-left text-[1.02rem] font-medium tracking-[0.02em] text-[#1d4e89] shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]"
                : "rounded-[0.8rem] px-[0.9rem] py-[0.85rem] text-left text-[1.02rem] font-medium tracking-[0.02em] text-[#102033]"
            }
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
