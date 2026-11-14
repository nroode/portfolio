export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className="reveal-1 flex md:flex-col items-center md:h-full w-auto justify-start md:fixed py-4 px-4 md:px-8 gap-2 md:gap-4">
      <h1 className="flex-0 whitespace-nowrap font-primary text-6xl md:text-9xl md:[writing-mode:vertical-rl] md:rotate-180">
        {title}
      </h1>
      <div className="bg-line h-(--line-width) w-full md:w-(--line-width) md:h-60 grow origin-left md:origin-top translate-y-[0.28rem] md:translate-y-0 md:translate-x-[0.53rem] motion-safe:animate-draw-x md:motion-safe:animate-draw-y"></div>
    </div>
  );
}
