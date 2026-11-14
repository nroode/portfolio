import Link from "next/link";
import HoverMarker from "./HoverMarker";
import type { Project } from "./projectData";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group flex">
      <div>
        <h3 className="project-title relative mb-1">
          <HoverMarker />
          {project.title}
        </h3>
        <p>{project.description}</p>
      </div>
    </Link>
  );
}
