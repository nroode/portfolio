interface TechListProps {
  tech: string[];
  className?: string;
}

export default function TechList({ tech, className = "" }: TechListProps) {
  return (
    <p className={`flex flex-wrap gap-x-2 ${className}`}>
      {tech.map((t) => (
        <span
          key={t}
          className="flex items-center gap-2 not-last:after:content-['✦'] after:text-[0.6em] after:opacity-50"
        >
          {t}
        </span>
      ))}
    </p>
  );
}
