/**
 * @see docs/portfolio/liquid-light.md
 * Project list stays put. The open write-up is the child route.
 */
import { ProjectList } from "@/components/project-list";

/** List plus the selected project page. */
export default function ProjectsLayout({ children }: LayoutProps<"/projects">) {
  return (
    <div className="grid min-h-full grid-cols-1 gap-4 md:grid-cols-[18rem_1fr]">
      <ProjectList />
      {children}
    </div>
  );
}
