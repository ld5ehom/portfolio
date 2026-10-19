/**
 * @see docs/portfolio/liquid-light.md
 * Project list stays put. The open write-up is the child route.
 */
import { ProjectList } from "@/components/project-list";

/** List plus the selected project page. */
export default function ProjectsLayout({ children }: LayoutProps<"/projects">) {
  return (
    <div className="grid min-h-full grid-cols-1 md:grid-cols-[16rem_1fr]">
      <div className="project-split md:pr-4">
        <ProjectList />
      </div>
      <div className="pt-4 md:pt-0 md:pl-4">{children}</div>
    </div>
  );
}
