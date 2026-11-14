"use client";

import { useEffect, useRef } from "react";

const FOLLOW = 0.06;

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;
    const query = "(pointer: fine) and (prefers-reduced-motion: no-preference)";
    if (!window.matchMedia(query).matches) return;

    const target = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };
    let frame = 0;
    let lastTime = 0;
    let hasMoved = false;

    const tick = (time: number) => {
      const elapsed = lastTime ? time - lastTime : 16.7;
      lastTime = time;
      const step = 1 - Math.pow(1 - FOLLOW, elapsed / 16.7);
      pos.x += (target.x - pos.x) * step;
      pos.y += (target.y - pos.y) * step;
      glow.style.translate = `${pos.x}px ${pos.y}px`;

      const settled =
        Math.abs(target.x - pos.x) < 0.5 && Math.abs(target.y - pos.y) < 0.5;
      frame = settled ? 0 : requestAnimationFrame(tick);
      if (settled) lastTime = 0;
    };

    const onPointerMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (!hasMoved) {
        pos.x = target.x;
        pos.y = target.y;
        hasMoved = true;
      }
      glow.style.opacity = "1";
      if (!frame) frame = requestAnimationFrame(tick);
    };
    const onLeave = () => {
      glow.style.opacity = "0";
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 -z-1 size-80 -ml-40 -mt-40 rounded-full opacity-0 mix-blend-multiply bg-[radial-gradient(circle,rgba(174,143,184,0.55),rgba(201,180,202,0.25)_40%,transparent_70%)] transition-opacity duration-(--motion-slow) will-change-[translate]"
    />
  );
}
