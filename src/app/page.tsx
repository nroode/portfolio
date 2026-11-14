import ArrowLink from "@/components/arrowLink/ArrowLink";
import SocialLinks from "@/components/socials/SocialLinks";

export default function Home() {
  return (
    <section className="relative flex-1 flex flex-col">
      <div className="page-container flex-1 flex flex-col justify-center pt-10 pb-24 md:py-10">
        <p className="reveal-1 font-secondary text-3xl mb-4 font-light flex items-center gap-2 md:gap-6">
          <span className="font-secondary italic text-2xl md:text-4xl whitespace-nowrap">
            hello, I&apos;m natalie roode
          </span>
        </p>
        <p className="reveal-2 font-primary text-4xl md:text-7xl font-light">
          UI focused software engineer crafting polished, digital experiences.
        </p>
        <ArrowLink
          href="/projects"
          className="reveal-3 self-start mt-8 -ml-[0.6em] text-2xl md:text-3xl"
        >
          see my work
        </ArrowLink>
        <SocialLinks className="reveal-4 absolute inset-x-0 bottom-6 justify-center md:inset-x-auto md:bottom-auto md:top-0 md:left-0 md:justify-start md:flex-col md:p-4" />
      </div>
    </section>
  );
}
