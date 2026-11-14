import ArrowLink from "@/components/arrowLink/ArrowLink";
import DetailList from "@/components/detailList/DetailList";
import SectionTitle from "@/components/sectionTitle/SectionTitle";

const skills = [
  {
    label: "Languages",
    content: "JavaScript, TypeScript, HTML5, CSS3, Sass/SCSS",
  },
  {
    label: "Frontend & UI",
    content:
      "React, Next.js, React Router, Vite, Tailwind CSS, Figma, Storybook, Design Systems, Responsive Design, Accessibility, Web Performance, Cross-Browser Development",
  },
  {
    label: "APIs, Commerce & Data",
    content:
      "REST APIs, GraphQL, Shopify Hydrogen, Payload CMS, Algolia, Analytics Instrumentation, A/B Testing",
  },
  {
    label: "Tools & Development",
    content:
      "Cypress, Unit Testing, Integration Testing, Webpack, Git/GitHub, Jira, Docker, AWS, AI-Assisted Development, Claude Code, Technical SEO",
  },
];

export default function About() {
  return (
    <section className="flex-1 flex flex-col">
      <SectionTitle title="about" />
      <div className="page-container flex-1 grid lg:grid-cols-[1.5fr_1fr] gap-10 pb-10 lg:pb-0 content-center items-center">
        <div className="reveal-2 [&>p+p]:mt-4">
          <p className="font-secondary text-2xl md:text-4xl">
            I&apos;m a product-minded software engineer with 7+ years of
            experience building intuitive, polished, and customer-centric web
            applications - <span className="italic">currently @ goop.</span>
          </p>
          <p>
            I&apos;m passionate about the intersection of technology, UX, and
            design, and enjoy turning complex problems into simple, thoughtful
            experiences.
          </p>
          <p>
            Before becoming a software engineer, I worked in market research,
            where I developed a strong understanding of customer behavior and
            formed data-driven recommendations to help businesses thrive. That
            perspective continues to shape how I approach development today.
          </p>
          <p>
            As an engineer, I love putting together my creativity and knack for
            solving problems to produce beautiful apps that make life a little
            easier. I bring a strong attention to detail and commitment to
            quality, combined with solid communication and organization from
            years of experience as a project manager.
          </p>
          <ArrowLink
            href="/projects"
            className="w-fit mt-4 -ml-[0.6em] text-xl md:text-2xl"
          >
            check out some of my recent projects
          </ArrowLink>
        </div>
        <DetailList title="Skills" items={skills} card className="reveal-3" />
      </div>
    </section>
  );
}
