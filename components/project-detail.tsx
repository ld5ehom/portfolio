/**
 * @see docs/portfolio/liquid-light.md
 * One project write-up. Bullets, then the structure, then the slide, then the stack chips.
 */
import Link from "next/link";
import { ProjectStage } from "@/components/project-stage";
import { basePath } from "@/lib/base-path";
import type { Project } from "@/lib/portfolio-content";

/** Title, Github, bullets, structure diagram, slide, then skills. */
export function ProjectDetail({ project }: { project: Project }) {
  return (
    <article className="text-black">
      <div className="mb-[0.4rem] flex items-end justify-between gap-4 border-b border-black/35 pb-1">
        <h2 className="m-0 font-[family-name:var(--font-display)] text-[2rem] font-semibold">{project.title}</h2>
        <Link
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={project.id === "market" ? project.linkLabel : undefined}
          className="inline-flex shrink-0 items-center gap-2 text-[1.5rem] font-medium text-black"
        >
          <svg viewBox="0 0 98 96" aria-hidden="true" className="h-5 w-5">
            <path
              fill="#181717"
              d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
            />
          </svg>
          {project.id === "market" ? null : project.linkLabel}
        </Link>
      </div>
      <ul className="mt-[0.35rem] list-disc pl-[1.1rem] text-[1.5rem] leading-[1.65] text-black">
        {project.body.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
      <iframe
        title={`${project.title} structure`}
        src={`${basePath}/diagrams/${project.id}.html`}
        className="mt-5 h-[900px] w-full rounded-[1.4rem] border-2 border-white"
      />
      {project.shots.length > 0 ? (
        <div className="mt-4">
          <ProjectStage shots={project.shots} />
        </div>
      ) : null}
      <h3 className="mt-5 mb-[0.4rem] border-b border-black/35 pb-1 font-[family-name:var(--font-display)] text-[2rem] font-semibold">
        Skills
      </h3>
      <ul className="m-0 mb-8 flex list-none flex-wrap gap-[0.4rem] p-0">
        {project.stack.split(", ").map((skill) => (
          <li key={skill} className="skill-chip text-[1.5rem] text-black">
            <span className="relative z-[2]">{skill}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
