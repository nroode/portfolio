"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function BackgroundMotion() {
  const pathname = usePathname();

  useEffect(() => {
    document.body.toggleAttribute("data-gradient-motion", pathname === "/");
  }, [pathname]);

  return null;
}
