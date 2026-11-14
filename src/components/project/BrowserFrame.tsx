import type { ReactNode } from "react";

export default function BrowserFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <figure
      className={`w-full overflow-hidden rounded-2xl border-(length:--line-width) border-line bg-white/40 shadow-xl shadow-mauve/10 ${className}`}
    >
      <div
        aria-hidden="true"
        className="flex items-center gap-1.5 h-8 px-4 border-b-(length:--line-width) border-line"
      >
        {[0, 1, 2].map((dot) => (
          <span key={dot} className="size-2 rounded-full bg-mauve/25" />
        ))}
      </div>
      {children}
    </figure>
  );
}
