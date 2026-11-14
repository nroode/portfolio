import type { ReactNode } from "react";
import ArrowLink from "@/components/arrowLink/ArrowLink";
import HoverMarker from "@/components/project/HoverMarker";
import ProjectCard from "@/components/project/ProjectCard";
import TechList from "@/components/project/TechList";
import {
  earlyProjectData,
  projectData,
} from "@/components/project/projectData";
import SectionTitle from "@/components/sectionTitle/SectionTitle";

interface ProjectGroupProps {
  title: string;
  description: ReactNode;
  className?: string;
  children: ReactNode;
}

function ProjectGroup({
  title,
  description,
  className = "",
  children,
}: ProjectGroupProps) {
  return (
    <div
      className={`md:grid md:grid-cols-[1fr_1.5fr] items-center md:gap-x-20 md:gap-y-10 ${className}`}
    >
      <div className="mb-8 md:mb-0">
        <h2 className="group-title">{title}</h2>
        <p className="font-secondary">{description}</p>
      </div>
      <div className="h-full flex flex-col gap-8 md:gap-10">{children}</div>
    </div>
  );
}

export default function Projects() {
  return (
    <div>
      <SectionTitle title="my work" />
      <section className="pb-16 md:py-20">
        <div className="page-container flex flex-col gap-10 md:gap-20">
          <ProjectGroup
            title="goop"
            className="reveal-2"
            description="Since 2019, I’ve worked across goop’s digital experiences, from building high-design editorial pages and interactive brand experiences to rebuilding and scaling goop.com as part of a full website redesign and Shopify replatform. My work focuses on creating polished, responsive, and accessible user interfaces that bring design to life and support a seamless customer experience."
          >
            {projectData.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </ProjectGroup>

          <div
            aria-hidden="true"
            className="reveal-3 flex items-center gap-4 text-line"
          >
            <span className="h-(--line-width) flex-1 bg-line" />
            <span className="text-xs">✦</span>
            <span className="h-(--line-width) flex-1 bg-line" />
          </div>

          <ProjectGroup
            title="this & that"
            description="A collection of projects from my early development work. These are the experiments, side projects and first attempts where I learned by building. They aren’t polished case studies, but they show where I started."
            className="reveal-4"
          >
            {earlyProjectData.map((p) => {
              const links = [
                { label: "github", href: p.link },
                { label: "demo", href: p.demoLink },
              ].filter((l): l is { label: string; href: string } =>
                Boolean(l.href),
              );

              return (
                <div key={p.slug} className="group">
                  <div>
                    <h3 className="project-title relative">
                      <HoverMarker />
                      {p.title}
                    </h3>
                    <TechList tech={p.tech} className="eyebrow mt-1" />
                    <p className="my-4">{p.description}</p>
                    {links.length > 0 && (
                      <div className="flex gap-2 -ml-[0.6em] text-xl">
                        {links.map(({ label, href }) => (
                          <ArrowLink key={label} href={href}>
                            {label}
                          </ArrowLink>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </ProjectGroup>
        </div>
      </section>
    </div>
  );
}
