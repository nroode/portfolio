import Image from "next/image";
import { notFound } from "next/navigation";
import DetailList, {
  type DetailItem,
} from "@/components/detailList/DetailList";
import BrowserFrame from "@/components/project/BrowserFrame";
import ComponentGallery from "@/components/project/ComponentGallery";
import TechList from "@/components/project/TechList";
import {
  type ProjectDetails,
  projectData,
} from "@/components/project/projectData";
import SectionTitle from "@/components/sectionTitle/SectionTitle";

const imageSizes =
  "(min-width: 1280px) 1080px, (min-width: 768px) calc(100vw - 200px), calc(100vw - 40px)";

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-1.5">
      {items.map((item) => (
        <li
          key={item}
          className="relative pl-5 before:absolute before:left-0 before:top-0 before:content-['✦'] before:text-[0.6em] before:leading-[2.5] before:opacity-50"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function Paragraphs({ text }: { text: string }) {
  return (
    <div className="flex flex-col gap-3">
      {text.split("\n\n").map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

const detailLabels: Record<keyof ProjectDetails, string> = {
  problem: "problem",
  what: "solution",
  role: "contributions",
  result: "result",
};

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projectData.map(({ slug }) => ({ slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const details: DetailItem[] = [
    ...Object.entries(project.fullDescription ?? {})
      .filter(([, value]) => value)
      .map(([key, content]) => ({
        label: detailLabels[key as keyof ProjectDetails],
        content: Array.isArray(content) ? (
          <BulletList items={content} />
        ) : (
          <Paragraphs text={content} />
        ),
      })),
    { label: "tech", content: <TechList tech={project.tech} /> },
  ];

  return (
    <section className="font-primary">
      <SectionTitle title="projects" />
      <div className="page-container mt-10 md:mt-20 py-10 flex flex-col md:grid md:grid-cols-1 gap-4 md:gap-10">
        <div>
          <h2 className="reveal-2 font-secondary font-light italic text-4xl md:text-7xl lowercase">
            {project.title}
          </h2>
          <DetailList items={details} className="reveal-3 mt-6 max-w-3xl" />
        </div>
        {project.components && (
          <ComponentGallery
            components={project.components}
            className="reveal-4"
          />
        )}
        {project.images.map((image, i) => (
          <BrowserFrame key={image.src} className="reveal-4">
            <div className="aspect-video overflow-y-auto [scrollbar-width:thin]">
              <Image
                src={image}
                alt={`${project.title} screenshot ${i + 1}`}
                sizes={imageSizes}
                loading={i === 0 ? "eager" : "lazy"}
                placeholder="blur"
                className="w-full min-h-full object-cover object-top"
              />
            </div>
          </BrowserFrame>
        ))}
      </div>
    </section>
  );
}
