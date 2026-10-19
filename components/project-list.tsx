/**
 * @see docs/portfolio/liquid-light.md
 * Project list for the projects layout. The URL picks the open card.
 */
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PROJECT_GROUPS, PROJECTS, type ProjectShot } from "@/lib/portfolio-content";

/** Thumbnail only when that project has a still. Store has none. */
function ProjectThumb({ shot }: { shot: ProjectShot }) {
  return (
    <Image
      src={shot.src}
      alt=""
      width={shot.width}
      height={shot.height}
      className="h-12 w-[4.2rem] rounded-[0.45rem] object-cover"
    />
  );
}

/** Cards. The first project is the index route, so the pane is never empty. */
export function ProjectList() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-4">
      {PROJECT_GROUPS.map((group) => (
        <section key={group}>
          <p className="m-0 mb-[0.4rem] text-[0.72rem] font-medium tracking-[0.16em] text-black uppercase">{group}</p>
          <ul className="m-0 flex list-none flex-col gap-[0.45rem] p-0">
            {PROJECTS.filter((project) => project.group === group).map((project) => {
              const href = `/projects/${project.id}`;
              const on = pathname === href;
              const shot = project.shots[0];
              return (
                <li key={project.id} className="animate-board-in motion-reduce:animate-none">
                  <Link
                    href={href}
                    aria-current={on ? "page" : undefined}
                    className={
                      shot
                        ? on
                          ? "grid w-full grid-cols-[4.2rem_1fr] items-center gap-[0.55rem] rounded-[0.8rem] border border-white/95 bg-white/40 p-[0.35rem] text-inherit"
                          : "grid w-full grid-cols-[4.2rem_1fr] items-center gap-[0.55rem] rounded-[0.8rem] border border-transparent bg-white/15 p-[0.35rem] text-inherit"
                        : on
                          ? "block w-full rounded-[0.8rem] border border-white/95 bg-white/40 p-[0.35rem] text-inherit"
                          : "block w-full rounded-[0.8rem] border border-transparent bg-white/15 p-[0.35rem] text-inherit"
                    }
                  >
                    {shot ? <ProjectThumb shot={shot} /> : null}
                    <strong className="block text-black">{project.title}</strong>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}
