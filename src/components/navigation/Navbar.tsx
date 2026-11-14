"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const navLinks = [
  { name: "home", href: "/" },
  { name: "my work", href: "/projects" },
  { name: "about", href: "/about" },
  { name: "contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const bubbleRef = useRef<HTMLSpanElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const linkRefs = useRef(new Map<string, HTMLAnchorElement>());
  const wasVisible = useRef(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);
  const bubbleHref = hoveredHref ?? pathname;

  useLayoutEffect(() => {
    const nav = navRef.current;
    const bubble = bubbleRef.current;
    if (!nav || !bubble) return;

    const activeLink = linkRefs.current.get(bubbleHref);

    const placeBubble = () => {
      if (!activeLink) return;
      bubble.style.translate = `${activeLink.offsetLeft}px ${activeLink.offsetTop}px`;
      bubble.style.width = `${activeLink.offsetWidth}px`;
      bubble.style.height = `${activeLink.offsetHeight}px`;
    };

    if (activeLink && !wasVisible.current) {
      bubble.style.transition = "none";
      placeBubble();
      bubble.getBoundingClientRect();
      bubble.style.transition = "";
    } else {
      placeBubble();
    }
    bubble.style.opacity = activeLink ? "1" : "0";
    wasVisible.current = Boolean(activeLink);

    const observer = new ResizeObserver(placeBubble);
    observer.observe(nav);
    if (activeLink) observer.observe(activeLink);
    return () => observer.disconnect();
  }, [bubbleHref]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const closeMenu = () => setMenuOpen(false);
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      closeMenu();
      menuButtonRef.current?.focus();
    };
    const desktop = window.matchMedia("(min-width: 48rem)");

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", closeMenu);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", closeMenu);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav
      ref={navRef}
      onMouseLeave={() => setHoveredHref(null)}
      className="flex justify-end items-center w-full sticky top-0 z-75 p-2 md:gap-2"
    >
      <span
        aria-hidden="true"
        className={`absolute inset-0 -z-10 bg-white/45 backdrop-blur-xl motion-safe:transition-opacity motion-safe:duration-(--motion-base) motion-safe:ease-(--motion-ease) ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />
      <span
        ref={bubbleRef}
        aria-hidden="true"
        className="max-md:hidden absolute left-0 top-0 rounded-full bg-white/40 opacity-0 motion-safe:transition-[translate,width,height,opacity] motion-safe:duration-(--motion-base) motion-safe:ease-(--motion-ease)"
      />
      {navLinks
        .filter((link) => !(link.href === "/" && pathname === "/"))
        .map((link) => (
          <Link
            key={link.href}
            href={link.href}
            ref={(el) => {
              if (el) linkRefs.current.set(link.href, el);
              return () => {
                linkRefs.current.delete(link.href);
              };
            }}
            onMouseEnter={() => setHoveredHref(link.href)}
            onFocus={() => setHoveredHref(link.href)}
            onBlur={() => setHoveredHref(null)}
            aria-current={pathname === link.href ? "page" : undefined}
            className="max-md:hidden relative whitespace-nowrap font-primary font-bold py-1.5 px-4"
          >
            {link.name}
          </Link>
        ))}

      <button
        ref={menuButtonRef}
        type="button"
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        onClick={() => setMenuOpen((open) => !open)}
        className="md:hidden relative z-10 rounded-full bg-white/40 backdrop-blur-sm font-primary font-bold text-sm py-1.5 px-4"
      >
        {menuOpen ? "close" : "menu"}
      </button>
      <div
        id="mobile-menu"
        inert={!menuOpen}
        className={`md:hidden fixed inset-0 flex flex-col justify-center px-8 bg-pink/80 backdrop-blur-xl motion-safe:transition-[opacity,visibility] motion-safe:duration-(--motion-base) motion-safe:ease-(--motion-ease) ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col gap-4">
          {navLinks.map((link, i) => (
            <li
              key={link.href}
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
              className={`motion-safe:transition-[opacity,translate] motion-safe:duration-(--motion-base) motion-safe:ease-(--motion-ease) ${
                menuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-3"
              }`}
            >
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                aria-current={pathname === link.href ? "page" : undefined}
                className="group flex items-center gap-3 font-secondary font-light italic lowercase text-5xl"
              >
                <span
                  aria-hidden="true"
                  className="text-[0.4em] not-italic opacity-0 group-aria-[current=page]:opacity-60"
                >
                  ✦
                </span>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
