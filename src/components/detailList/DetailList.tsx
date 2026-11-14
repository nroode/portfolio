import type { ReactNode } from "react";

export interface DetailItem {
  label: string;
  content: ReactNode;
}

interface DetailListProps {
  items: DetailItem[];
  title?: string;
  card?: boolean;
  className?: string;
}

export default function DetailList({
  items,
  title,
  card = false,
  className = "",
}: DetailListProps) {
  return (
    <div
      className={`${card ? "rounded-2xl border-(length:--line-width) border-line p-6 md:p-8" : ""} ${className}`}
    >
      {title && (
        <h2 className="font-primary font-bold text-3xl md:text-4xl mb-4">
          {title}
        </h2>
      )}
      <dl className="flex flex-col gap-5">
        {items.map(({ label, content }) => (
          <div key={label}>
            <dt className="eyebrow mb-1">{label}</dt>
            <dd>{content}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
