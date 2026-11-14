import Image, { type StaticImageData } from "next/image";

export interface ComponentShot {
  label: string;
  image: StaticImageData;
}

const sizesFor = (columns: 2 | 3) =>
  columns === 3
    ? "(min-width: 1280px) 280px, (min-width: 768px) calc((100vw - 344px) / 3), min(calc(100vw - 104px), 400px)"
    : "(min-width: 1280px) 450px, (min-width: 768px) calc((100vw - 304px) / 2), min(calc(100vw - 104px), 400px)";

export default function ComponentGallery({
  components,
  className = "",
}: {
  components: ComponentShot[];
  className?: string;
}) {
  const columns = components.length % 3 === 0 ? 3 : 2;

  return (
    <div
      className={`grid gap-6 ${columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2"} ${className}`}
    >
      {components.map(({ label, image }) => (
        <figure
          key={label}
          className="flex flex-col overflow-hidden rounded-2xl border-(length:--line-width) border-line bg-white/40 shadow-xl shadow-mauve/10"
        >
          <div className="flex flex-1 items-center justify-center p-8 md:p-10 bg-[radial-gradient(color-mix(in_srgb,var(--color-mauve)_20%,transparent)_1px,transparent_1px)] bg-size-[16px_16px]">
            <Image
              src={image}
              alt={`${label} component`}
              sizes={sizesFor(columns)}
              loading="lazy"
              placeholder="blur"
              style={{ width: image.width / 2 }}
              className="max-w-full rounded-md shadow-md shadow-mauve/10"
            />
          </div>
          <figcaption className="eyebrow px-4 py-3 border-t-(length:--line-width) border-line">
            {label}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
