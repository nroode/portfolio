import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRightIcon } from "@/components/icons/Icons";

interface ArrowLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function ArrowLink({
  href,
  children,
  className = "",
}: ArrowLinkProps) {
  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
      className={`group/arrow flex items-center gap-[0.4em] rounded-full px-[0.6em] py-[0.15em] font-secondary font-light italic transition-colors duration-(--motion-fast) hover:bg-white/40 ${className}`}
    >
      {children}
      <ArrowRightIcon className="size-[0.8em] transition-transform duration-(--motion-fast) group-hover/arrow:translate-x-1" />
    </Link>
  );
}
