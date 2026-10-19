/**
 * @see docs/portfolio/liquid-light.md
 * One project per URL. Unknown ids 404.
 */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/project-detail";
import { PROJECTS } from "@/lib/portfolio-content";

/** Unknown project ids are not generated. */
export const dynamicParams = false;

/** Static paths for the project cards. */
export function generateStaticParams() {
  return PROJECTS.map((project) => ({ id: project.id }));
}

/** Title follows the open project. */
export async function generateMetadata({ params }: PageProps<"/projects/[id]">): Promise<Metadata> {
  const { id } = await params;
  const project = PROJECTS.find((item) => item.id === id);
  return { title: project ? `${project.title} · Taewook Park` : "Taewook Park" };
}

/** Project route. */
export default async function ProjectPage({ params }: PageProps<"/projects/[id]">) {
  const { id } = await params;
  const project = PROJECTS.find((item) => item.id === id);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
