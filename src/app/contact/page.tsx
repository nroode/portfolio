import SectionTitle from "@/components/sectionTitle/SectionTitle";
import SocialLinks from "@/components/socials/SocialLinks";

export default function Contact() {
  return (
    <section className="flex-1 flex flex-col">
      <SectionTitle title="contact" />
      <div className="page-container w-full md:pr-40 flex-1 flex flex-col justify-center gap-10">
        <div className="text-center">
          <p className="reveal-2 font-secondary text-3xl md:text-5xl mt-4">
            need help with a project? get in touch
          </p>
          <SocialLinks className="reveal-3 justify-center my-6 md:my-10" />
        </div>
      </div>
    </section>
  );
}
