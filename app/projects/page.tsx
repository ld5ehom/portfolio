/**
 * @see docs/portfolio/liquid-light.md
 * `/projects` opens the first card so the pane is never empty.
 */
import { redirect } from "next/navigation";
import { PROJECTS } from "@/lib/portfolio-content";

/** Index route. */
export default function ProjectsIndex() {
  redirect(`/projects/${PROJECTS[0].id}`);
}
